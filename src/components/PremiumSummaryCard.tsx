import { TrendingUp } from "lucide-react";
import s from "./PremiumSummaryCard.module.scss";

interface Props {
  title: string;
  icon: any;
  number: string;
}

export const PremiumSummaryCard = ({ title, icon, number }: Props) => {
  return (
    <div className={s.main}>
      <div className={s.top}>
        <h3>{title}</h3>

        {icon}
      </div>

      <span>{number}</span>

      <div className={s.bottom}>
        <TrendingUp />

        <p>+12% vs mes anterior</p>
      </div>
    </div>
  );
};
