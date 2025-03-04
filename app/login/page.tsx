'use client'

import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger; // Debug point before form submission
    console.log('[Login Page] Form submission initiated');
    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    console.log('[Login Page] Form data collected');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    debugger; // Debug point after API response
    console.log('[Login Page] API response status:', res.status);
    if (res.ok) {
      console.log('[Login Page] Login successful, redirecting to admin');
      router.push('/admin');
    } else {
      console.log('[Login Page] Login failed');
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight dark:text-white">Admin Login</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Enter your credentials to access the admin panel</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="username"
              placeholder="Username"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}