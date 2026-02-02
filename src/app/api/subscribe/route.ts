import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Log the subscription
    console.log(`New subscriber: ${email} from ${source || 'unknown'} for inboxbridge`);
    
    // In production, you could send to a webhook or external API
    // For now, we just log it (Vercel logs will capture these)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
