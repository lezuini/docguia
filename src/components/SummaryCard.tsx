import s from "./SummaryCard.module.scss";

interface Props {
  title: string;
  icon: any;
  number: string;
  helperText: string;
}

export const SummaryCard = ({ title, icon, number, helperText }: Props) => {
  return (
    <div className={s.main}>
      <div className={s.top}>
        <h3>{title}</h3>

        {icon}
      </div>

      <span>{number}</span>

      <p>{helperText}</p>
    </div>
  );
};
