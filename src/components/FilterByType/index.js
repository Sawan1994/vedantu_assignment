import React, { useState, useEffect } from "react";
import SelectPicker from "../SelectPicker";
import { getFilteredRepositories } from "../../redux/actions";
import { useDispatch } from "react-redux";

const OPTIONS = [
  { label: "All", value: "" },
  { label: "Forks", value: "fork" },
  { label: "Sources", value: "source" },
  { label: "Archived", value: "archived" },
  { label: "Mirrors", value: "mirror" },
];

function FilterByType() {
  const [filterType, setFilterType] = useState("All");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredRepositories(filterType));
  }, [filterType]);

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

export default FilterByType;
