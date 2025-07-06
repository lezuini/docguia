import { supabase } from "../../../../lib/supabase";

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: `${username}@medicoapp.com`,
      password,
    });

    if (error) {
      return Response.json(
        {
          success: false,
          error: error.message,
        },
        { status: 401 }
      );
    }

    const { data: medicoData, error: medicoError } = await supabase.from("medicos").select("*").eq("username", username).single();

    if (medicoError) {
      return Response.json(
        {
          success: false,
          error: medicoError.message,
        },
        { status: 401 }
      );
    }

    return Response.json({
      fullname: medicoData.fullname,
      success: true,
      user: data.user,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 401 }
    );
  }
}
