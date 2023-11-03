import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: FontAwesomeIconProps;
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick, icon }) => {
  return (
    <>
      {icon && <FontAwesomeIcon icon={icon.icon} />}
      <label htmlFor={label}>{label}</label>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
