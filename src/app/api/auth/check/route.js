import { supabase } from "../../../../lib/supabase";

export async function GET() {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return Response.json({ success: true, isLoggedIn: !!session });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }
}
