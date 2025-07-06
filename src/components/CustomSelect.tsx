import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface Props {
  placeholder: string;
  options: string[];
  setValue: any;
}

export const CustomSelect = ({ placeholder, options, setValue }: Props) => {
  return (
    <Select
      onValueChange={(v) => {
        setValue(v);
      }}
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
