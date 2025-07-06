import { supabase } from "../../../../lib/supabase";

export async function POST(request) {
  const { username, fullname, password } = await request.json();

  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: `${username}@medicoapp.com`,
      password,
      options: {
        emailRedirectTo: undefined,
      },
    });

    if (authError) {
      return Response.json(
        {
          success: false,
          error: authError.message,
        },
        { status: 400 }
      );
    }

    const { data: medicoData, error: medicoError } = await supabase
      .from("medicos")
      .insert([
        {
          id: authData.user.id,
          username,
          fullname,
        },
      ])
      .select();

    if (medicoError) {
      return Response.json(
        {
          success: false,
          error: medicoError.message,
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        medico: medicoData[0],
      },
      { status: 201 }
    );
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
