import React from "react";
import "./style.css";

function SelectPicker({
  options,
  value,
  getOptionLabel,
  getOptionValue,
  name,
  onChange,
}) {
  return (
    <select
      className="select__picker"
      value={value}
      onChange={onChange}
      name={name}
    >
      {options.map((option) => (
        <option value={getOptionValue(option)}>{getOptionLabel(option)}</option>
      ))}
    </select>
  );
}

export default SelectPicker;
