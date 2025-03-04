import { NextResponse } from 'next/server';

interface LoginRequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    debugger; // Debug point for incoming request
    console.log('[Login API] Received login request');
    const body = await request.json() as LoginRequestBody;
    const { username, password } = body;
    console.log('[Login API] Parsed request body');
    
    const validUsername = process.env.AUTH_USERNAME;
    const validPassword = process.env.AUTH_PASSWORD;

    if (!validUsername || !validPassword) {
      debugger; // Debug point for missing environment variables
      console.log('[Login API] Missing environment variables');
      return NextResponse.json(
        { message: 'Authentication not properly configured' },
        { status: 500 }
      );
    }

    debugger; // Debug point for credential validation
    console.log('[Login API] Validating credentials');
    if (username === validUsername && password === validPassword) {
      console.log('[Login API] Authentication successful');
      const response = NextResponse.json(
        { success: true },
        { status: 200 }
      );
      
      response.cookies.set('auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });

      return response;
    }

    debugger; // Debug point for invalid credentials
    console.log('[Login API] Authentication failed - Invalid credentials');
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  } catch (error) {
    debugger; // Debug point for error handling
    console.error('[Login API] Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}