import { supabase } from "../../../../lib/supabase";

export async function POST(request) {
  const {
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
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("No autenticado");

    const { data, error } = await supabase
      .from("consultorios")
      .insert([
        {
          medico_id: user.id,
          nombre,
          ciudad,
          direccion,
          indicaciones,
          telefono,
          prefijo_telefono,
          duracion_consulta,
          recibir_notificacion,
          anticipacion_citas,
        },
      ])
      .select();

    if (error) throw error;

    return Response.json(
      {
        success: true,
        consultorio: data[0],
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
