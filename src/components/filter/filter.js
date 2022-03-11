import CategoriesList from "../categories-list/categories-list";
import Search from "../search/search";

const Filter = (props) => {
  return (
    <>
      <div className={"mb-3 mt-5"}>
        <CategoriesList
          categories={props.categories}
          selectedCategory={props.selectedCategory}
          onCategorySelectHandler={props.onCategorySelectHandler}
        />
      </div>
      <div>
        <Search onSearchHandler={props.onSearchHandler} />
      </div>
    </>
  );
};

export default Filter;
