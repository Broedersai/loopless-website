import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const { data: { user } } = await supabase.auth.getUser();

  const url = request.nextUrl;
  const isLoginPage = url.pathname === "/beheer/login";

  if (!user && !isLoginPage) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = "/beheer/login";
    return NextResponse.redirect(redirectUrl);
  }

  if (user && isLoginPage) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = "/beheer";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ["/beheer/:path*"],
};
