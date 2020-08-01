import React, { useState, useEffect } from "react";
import "./style.css";
import Search from "../Search";
import FilterByType from "../FilterByType";
import FilterByLanguage from "../FilterByLanguage";
import { getRepositories } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const MONTHS = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Content() {
  const [searchText, setSearchText] = useState("");

  const repos = useSelector((state) => state.repositories.repos || []);
  const isLoading = useSelector((state) => state.repositories.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories());
  }, []);

  const getDate = (date) => {
    const current = new Date(date);

    return (
      current.getDate() +
      " " +
      MONTHS[current.getMonth()].substring(0, 3) +
      ", " +
      current.getFullYear()
    );
  };

  const getFilteredData = () => {
    if (repos === null || repos === undefined) {
      return null;
    }

    let filteredRepos = repos || [];

    if (searchText && searchText.length > 0) {
      const lowerCaseSearchText = searchText.toLowerCase();

      filteredRepos = filteredRepos.filter(
        ({ name }) =>
          name && name.toLowerCase().indexOf(lowerCaseSearchText) !== -1
      );
    }

    return filteredRepos;
  };

  return (
    <div className="repositories card">
      <div className="repositories__search">
        <Search onSearchChange={setSearchText} />
        <div className="repositories__filter">
          <FilterByType />
        </div>
        <div className="repositories__filter">
          <FilterByLanguage />
        </div>
      </div>
      <div className="repositories__list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          getFilteredData().map(({ name, description, updated_at }) => (
            <div className="repositories__list_item" key={name}>
              <h4 className="repository__name">{name}</h4>
              <p className="repository__description">{description}</p>
              <p className="repository_updated">
                <span>Updated on </span>
                <span>{getDate(updated_at)}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Content;
