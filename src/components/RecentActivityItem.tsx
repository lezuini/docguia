import s from "./RecentActivityItem.module.scss";

interface Props {
  title: string;
  name: string;
  hours: string;
}

export const RecentActivityItem = ({ title, name, hours }: Props) => {
  return (
    <div className={s.main}>
      <div className={s.dot} />
      <div className={s.text}>
        <p>{title}</p>
        <span>{name}</span>
      </div>

      <span className={s.hours}>{`Hace ${hours} horas`}</span>
    </div>
  );
};
