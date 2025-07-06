import { supabase } from "../../../../lib/supabase";

export async function GET(request) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("No autenticado");

    const { data, error } = await supabase.from("consultorios").select("*").eq("medico_id", user.id);

    if (error) throw error;

    return Response.json({
      success: true,
      consultorios: data,
    });
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
