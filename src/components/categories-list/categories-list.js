import addIcon from "../../assets/ionic-ios-add.svg";
import Category from "../category/category";
import "./categories-list.scss";

const CategoriesList = (props) => {
  return (
    <div className={"category-list"}>
      {props.categories.map((category) => {
        return (
          <Category
            key={category}
            name={category}
            disabled={category === "+" && props.categories.length === 6}
            className={
              props.selectedCategory === category
                ? "selected-category"
                : "category"
            }
            onClickHandler={() => props.onCategorySelectHandler(category)}
          >
            {category !== "+" ? (
              <span>{category}</span>
            ) : (
              <img src={addIcon} alt="add" />
            )}
          </Category>
        );
      })}
    </div>
  );
};

export default CategoriesList;
