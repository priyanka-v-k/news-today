import "./search.scss";
const Search = (props) => {
  return (
    <label className="search-label">
      <input
        type="text"
        className={"input"}
        placeholder="Search for keywords, author"
        onChange={(e) => props.onSearchHandler(e.target.value)}
      ></input>
    </label>
  );
};

export default Search;
