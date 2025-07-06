"use client";

import { usePathname } from "next/navigation";
import s from "./Header.module.scss";

import { LogOut, PanelLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { signOutMedico } from "@/lib/api";
import toast from "react-hot-toast";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getRouteTitle = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] || "/";
  const secondSegment = segments[1];
  const thirdSegment = segments[2];

  // Caso especial para consultorios
  if (firstSegment === "consultorios") {
    if (thirdSegment === "editar") {
      return "Editar Consultorio";
    }
    if (thirdSegment === "disponibilidad") {
      return "Editar Disponibilidad";
    }
    if (secondSegment === "nuevo") {
      return "Nuevo Consultorio";
    }
    return "Consultorios";
  }

  // Casos generales
  switch (firstSegment) {
    case "/":
      return "Dashboard";
    case "plantillas":
      return "Plantillas de Episodios";
    default:
      return capitalize(firstSegment);
  }
};

export const Header = ({ setIsOpen }: any) => {
  const [isClient, setIsClient] = useState(false);
  const [title, setTitle] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTitle(getRouteTitle(pathname));
    }
  }, [pathname, isClient]);

  const handleLogout = async () => {
    try {
      await signOutMedico();

      window.location.href = "/login";
    } catch (error) {
      toast.error("Error al cerrar sesión");
    }
  };

  let storedFullname = "";

  if (typeof window !== "undefined") {
    storedFullname = localStorage.getItem("fullname") ?? "";
  }

  return (
    <div className={s.main}>
      <button
        className={s.panelButton}
        onClick={() => {
          setIsOpen((c: boolean) => !c);
        }}
      >
        <PanelLeft />
      </button>

      <div className={s.center}>
        {isClient && (
          <>
            <h1>{title}</h1>

            <div className={s.user}>
              <span>Dr. {storedFullname}</span>

              <div className={s.initials}>CM</div>

              <button onClick={handleLogout}>
                <LogOut />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
