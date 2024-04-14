import type { UseFormRegister } from "react-hook-form";

const getRegex = (paramType: string) => {
  switch (paramType) {
    case "address":
      return /^0x[a-fA-F0-9]{40}$/;
    case "uint256":
      return /^[0-9]+$/;
    case "string":
      return /^.*$/;
    case "bool":
      return /^(true|false)$/;
    default:
      return /^.*$/;
  }
};

interface FieldProps {
  formKey: string;
  label: string;
  placeholder: string;
  paramType: string;
  register: UseFormRegister<any>;
  defaultValue?: string;
  options?: string[];
  isDisabled?: boolean;
  fieldType?: "textarea" | "select" | "input";
}

const inputClasses = "p-2 border text-sm text-white rounded-lg outline-none";

export const Field: React.FC<FieldProps> = ({
  formKey,
  label,
  placeholder,
  defaultValue,
  paramType,
  register,
  isDisabled,
  fieldType = "input",
  options = [],
}) => {
  const renderField = () => {
    switch (fieldType) {
      case "textarea":
        return (
          <textarea
            className={inputClasses}
            placeholder={placeholder}
            {...register(formKey, { required: true })}
            defaultValue={defaultValue}
          />
        );
      case "select":
        const selectOptions = [
          <option value="" selected disabled hidden>
            Choose from options
          </option>,
          ...options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          )),
        ];
        return (
          <select
            className={inputClasses}
            {...register(formKey, { required: true })}
            defaultValue={defaultValue}
          >
            {selectOptions}
          </select>
        );
      default:
        return (
          <input
            disabled={isDisabled}
            className={inputClasses}
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
        );
    }
  };

  return (
    <div key={formKey} className="flex flex-col gap-2">
      <span className="text-white-44 text-sm">{label}</span>
      {renderField()}
    </div>
  );
};
