export { renderers } from '../../renderers.mjs';

const CORRECT_PIN = "060622";
const POST = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const pin = data.get("pin");
  if (pin === CORRECT_PIN) {
    cookies.set("portal_auth", "authenticated", {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30
      // 30 days
    });
    return redirect("/dashboard");
  } else {
    return redirect("/login?error=invalid");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
