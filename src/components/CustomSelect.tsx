import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface Props {
  placeholder: string;
  options: string[];
  value: string;
  setValue: any;
}

export const CustomSelect = ({ placeholder, options, value, setValue }: Props) => {
  return (
    <Select
      onValueChange={(v) => {
        setValue(v);
      }}
      value={value}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem key={option} value={option.toLowerCase()}>
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
