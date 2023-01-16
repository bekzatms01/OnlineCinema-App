import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ query, handleSearch, getData }) => {
  const keyHandler = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

  return (
    <>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search..."
        autoComplete="off"
        onChange={handleSearch}
        onKeyDown={keyHandler}
      />
      <FontAwesomeIcon
        icon={faSearch}
        onClick={getData}
        className="search-btn"
      />
    </>
  );
};

export default SearchForm;
