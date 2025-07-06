import { supabase } from "../../../../lib/supabase";

export async function POST(request) {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    return Response.json({
      success: true,
      message: "Sesión cerrada correctamente",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
