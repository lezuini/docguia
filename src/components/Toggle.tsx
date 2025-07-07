import s from "./Toggle.module.scss";

interface Props {
  active: boolean;
  setActive: any;
}

export const Toggle = ({ active, setActive }: Props) => {
  return (
    <button className={`${s.main} ${active ? s.active : ""}`} onClick={setActive} type="button">
      <span />
    </button>
  );
};
