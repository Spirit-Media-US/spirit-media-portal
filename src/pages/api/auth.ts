import type { APIRoute } from 'astro';

const CORRECT_PIN = '060622';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  // Parse form data
  const data = await request.formData();
  const pin = data.get('pin');

  // Validate PIN
  if (pin === CORRECT_PIN) {
    // Set cookie
    cookies.set('portal_auth', 'authenticated', {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    // Redirect to dashboard
    return redirect('/dashboard');
  } else {
    // Redirect back to login with error
    return redirect('/login?error=invalid');
  }
};
