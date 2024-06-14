import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchFieldId = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchFieldId}>Filter Contacts by Name</label>
      <input type="text" name="searchbox" id={searchFieldId} />
    </div>
  );
};

export default SearchBox;
