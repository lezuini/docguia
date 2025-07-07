import { supabase } from "../../../../../lib/supabase";

export async function GET(request, { params }) {
  const { id } = await params;

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

    const { data, error } = await supabase.from("consultorios").select("*").eq("medico_id", user.id).eq("id", id);

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
      data: data[0],
    });
  } catch (error) {
    console.log(error.message);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }
}
