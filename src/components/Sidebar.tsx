"use client";

import s from "./Sidebar.module.scss";

import Image from "next/image";
import { Building2, Calendar, Crown, FileText, House, Users } from "lucide-react";
import { SidebarNavItem } from "./SidebarNavItem";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

export const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`${s.main} ${!isOpen ? s.closed : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className={s.container}>
        <div className={s.internal}>
          <div className={s.header}>
            <Image src={"/docguia-logo-white.png"} alt="DocGuia" width={128} height={28} priority />

            <span>Beta</span>
          </div>

          <div className={s.nav}>
            <ul>
              <li>
                <SidebarNavItem icon={<House />} text="Inicio" href="/" />
              </li>
              <li>
                <SidebarNavItem icon={<Calendar />} text="Calendario" href="/calendario" />
              </li>
              <li>
                <SidebarNavItem icon={<Building2 />} text="Consultorios" href="/consultorios" />
              </li>
              <li>
                <SidebarNavItem icon={<Users />} text="Pacientes" href="/pacientes" />
              </li>
              <li>
                <SidebarNavItem icon={<FileText />} text="Plantillas Episodios" href="/plantillas" />
              </li>
            </ul>
          </div>

          <div className={s.footer}>
            <div className={s.card}>
              <div className={s.top}>
                <Crown />
                <span>Premium</span>
              </div>

              <p>1099 días restantes</p>

              <button>Ver detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
