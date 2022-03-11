import axios from "axios";
import { useEffect, useState } from "react";
import AddCategory from "../add-category/add-category";
import ArticlesList from "../articles-list/articles-list";
import Filter from "../filter/filter";
import "./home.scss";
const Home = () => {
  const [categories, setCategories] = useState(["TechCrunch", "+"]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("TechCrunch");
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory, searchTerm]);

  const fetchArticles = () => {
    setIsLoading(true);
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          sources: selectedCategory,
          // apiKey: "a5cf886a8dd84801a01c8b5bd0da1b0d",
          apiKey: "b735de316e1f4edfb4c95ee5e3ab1335",
          ...(searchTerm && { q: searchTerm }),
        },
      })
      .then((response) => {
        setIsLoading(false);
        setArticles(response.data.articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const onCategorySelectHandler = (category) => {
    if (category === "+") {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const modalCloseHandler = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const onCategoryAddHandler = (formData) => {
    const modifiedCategories = [
      ...categories.slice(0, categories.length - 1),
      formData.categoryName,
      categories[categories.length - 1],
    ];
    setCategories(modifiedCategories);
    setSelectedCategory(formData.categoryName);
    modalCloseHandler();
  };

  const onSearchHandler = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="my-5">
        <h1>News Today</h1>
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelectHandler={onCategorySelectHandler}
          onSearchHandler={onSearchHandler}
        />
        {!isLoading ? (
          <ArticlesList articles={articles} />
        ) : (
          <div className="mt-3 w-100 text-center">Loading ...</div>
        )}
        {showModal ? (
          <AddCategory
            handleClose={modalCloseHandler}
            handleAdd={onCategoryAddHandler}
          ></AddCategory>
        ) : null}
      </div>
    </>
  );
};

export default Home;
