import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const runtime = "edge"

export async function GET() {
  debugger; // Debug point for auth check
  console.log('[Auth Check] Checking authentication status');
  const cookieStore = cookies();
  const authCookie = cookieStore.get('auth');
  console.log('[Auth Check] Auth cookie value:', authCookie?.value);
  
  if (!authCookie || authCookie.value !== 'true') {
    debugger; // Debug point for unauthorized access
    console.log('[Auth Check] Authentication failed - Invalid or missing cookie');
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  debugger; // Debug point for successful auth
  console.log('[Auth Check] Authentication successful');
  return NextResponse.json({ authenticated: true });
}