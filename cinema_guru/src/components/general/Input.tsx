import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface InputProps {
  label: string;
  type: string;
  className: string;
  value: string;
  setValue(value: string): void;
  icon?: FontAwesomeIconProps;
  inputAttributes?: object;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {icon && <FontAwesomeIcon icon={icon.icon} />}
      <input
        name={label}
        type={type}
        onChange={handleInput}
        value={value}
        className={className}
        {...inputAttributes}
      />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default Input;
