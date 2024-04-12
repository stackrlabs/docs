import type { UseFormRegister } from "react-hook-form";
import { getRegex } from "../utils";

interface InputProps {
  formKey: string;
  label: string;
  placeholder: string;
  paramType: string;
  register: UseFormRegister<any>;
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  formKey,
  label,
  placeholder,
  defaultValue,
  paramType,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white-44 text-sm">{label}</span>
      <input
        disabled={label === "Wallet"}
        className="p-2 border text-sm text-white rounded-lg outline-none"
        placeholder={placeholder}
        {...register(formKey, {
          required: "required",
          pattern: {
            value: getRegex(paramType),
            message: "Invalid input",
          },
          value: defaultValue || "",
          setValueAs: (value) =>
            paramType === "uint256"
              ? value === ""
                ? ""
                : isNaN(Number(value))
                ? value
                : Number(value)
              : value,
        })}
      />
    </div>
  );
};