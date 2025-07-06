import Link from "next/link";
import s from "./PatientQuickAccess.module.scss";

export const PatientQuickAccess = () => {
  return (
    <Link href={"/pacientes/1"} className={s.main}>
      <div className={s.initials}>
        <span>MER</span>
      </div>

      <div className={s.text}>
        <p>María Elena Rodríguez</p>
        <span>Próxima cita: 21 jun</span>
      </div>
    </Link>
  );
};
