interface SelectInputProps {
  label: string;
  options: [];
  className: string;
  value: string;
  setValue(value: string): void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  className,
  value,
  setValue,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        className={className}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
