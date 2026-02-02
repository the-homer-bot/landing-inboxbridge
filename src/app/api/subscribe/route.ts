import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Log the subscription (in production, store in database)
    console.log(`New subscriber: ${email} from ${source}`);
    
    // If DATABASE_URL is set, store in Postgres
    const databaseUrl = process.env.DATABASE_URL;
    if (databaseUrl) {
      try {
        // Dynamic import to avoid issues when pg isn't available
        const { Pool } = await import('pg');
        const pool = new Pool({ connectionString: databaseUrl });
        
        await pool.query(`
          INSERT INTO landing_subscribers (email, project_slug, source, created_at)
          VALUES ($1, $2, $3, NOW())
          ON CONFLICT (email, project_slug) DO NOTHING
        `, [email, 'inboxbridge', source || 'unknown']);
        
        await pool.end();
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue anyway - don't fail the request
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
