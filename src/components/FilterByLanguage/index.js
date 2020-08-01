import React, { useState } from "react";
import SelectPicker from "../SelectPicker";

const OPTIONS = [{ label: "All", value: "" }];

function FilterByLanguage() {
  const [filterType, setFilterType] = useState("All");
  const getOptionLabel = (option) => option.label;
  const getOptionValue = (option) => option.value;

  const handleFilterTypeChange = (event) => {
    const { value } = event.target;

    setFilterType(value);
  };
  return (
    <SelectPicker
      options={OPTIONS}
      value={filterType}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      onChange={handleFilterTypeChange}
    />
  );
}

export default FilterByLanguage;
