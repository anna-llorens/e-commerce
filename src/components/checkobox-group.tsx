import React from "react";

type Props = {
  name: string;
  options: string[];
  selectedValues: string[];
  onChange: (name: any, value: string, checked: boolean) => void;
};

export const CheckboxGroup: React.FC<Props> = ({
  name,
  options,
  selectedValues,
  onChange,
}) => {
  return (
    <div>
      <b>{name.charAt(0).toUpperCase() + name.slice(1)}</b>
      {options.map((option) => (
        <label key={option} className="checkbox-radio-item">
          <input
            type="checkbox"
            name={name}
            data-testid={`checkbox-${name}-${option}`}
            value={option}
            checked={selectedValues.includes(option)}
            onChange={(e) => onChange(name, option, e.target.checked)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
