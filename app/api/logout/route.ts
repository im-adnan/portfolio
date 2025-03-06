import { NextResponse } from 'next/server';

export const runtime = "edge"

export async function POST() {
  debugger; // Debug point for logout request
  console.log('[Logout API] Processing logout request');
  
  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  );

  // Clear the auth cookie
  response.cookies.set('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0) // Set expiration to past date to ensure cookie is removed
  });

  console.log('[Logout API] Auth cookie cleared');
  return response;
}