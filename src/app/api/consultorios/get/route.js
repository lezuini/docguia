import { supabase } from "../../../../lib/supabase";

export async function GET(request) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json(
        {
          success: false,
          error: "No autenticado",
        },
        { status: 401 }
      );
    }

    const { data, error } = await supabase.from("consultorios").select("*").eq("medico_id", user.id);

    if (error) {
      return Response.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

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
