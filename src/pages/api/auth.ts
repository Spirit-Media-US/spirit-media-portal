import type { APIRoute } from 'astro';

const CORRECT_PIN = '030126';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  // Parse form data
  const data = await request.formData();
  const pin = data.get('pin');

  // Validate PIN
  if (pin === CORRECT_PIN) {
    // Set cookie with PIN-derived token so changing PIN invalidates all sessions
    cookies.set('portal_auth', `pin_${CORRECT_PIN}`, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Redirect to dashboard
    return redirect('/dashboard');
  } else {
    // Redirect back to login with error
    return redirect('/login?error=invalid');
  }
};
