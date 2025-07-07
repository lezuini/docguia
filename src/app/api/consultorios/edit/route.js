import { supabase } from "../../../../lib/supabase";

export async function PUT(request) {
  const {
    id,
    nombre,
    ciudad,
    direccion,
    indicaciones,
    telefono,
    prefijo_telefono,
    duracion_consulta,
    recibir_notificacion,
    anticipacion_citas,
  } = await request.json();

  try {
    // 1. Verificar autenticación
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);

    if (!user) {
      return Response.json(
        {
          success: false,
          error: "No autenticado",
        },
        { status: 401 }
      );
    }

    // 2. Verificar que el consultorio pertenece al médico
    const { data: existingConsultorio, error: fetchError } = await supabase.from("consultorios").select("medico_id").eq("id", id).single();

    if (fetchError || existingConsultorio.medico_id !== user.id) {
      return Response.json(
        {
          success: false,
          error: "No tienes permisos para editar este consultorio",
        },
        { status: 403 }
      );
    }

    const { data, error } = await supabase
      .from("consultorios")
      .update({
        nombre,
        ciudad,
        direccion,
        indicaciones,
        telefono,
        prefijo_telefono,
        duracion_consulta,
        recibir_notificacion,
        anticipacion_citas,
      })
      .eq("id", id)
      .select();

    if (error) {
      return Response.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        consultorio: data[0],
      },
      { status: 200 }
    );
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
