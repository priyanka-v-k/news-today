import { useState } from "react";
import ReactDOM from "react-dom";
import addIcon from "../../assets/ionic-ios-add-white.svg";
import Card from "../card/card";
import Category from "../category/category";
import "./add-category.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.handleClose}></div>;
};
const ModalOverlay = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  const onAddHandler = () => {
    if (categoryName && apiUrl) {
      props.handleAdd({
        categoryName,
        apiUrl,
      });
    }
  };
  return (
    <Card className="add-category-modal card col-md-6 offset-md-3 col-10 offset-1">
      <div className="modal-heading mb-5">Add Category </div>
      <div className="form-floating mb-5">
        <input
          type="text"
          className="form-control"
          id="categoryName"
          placeholder="categoryName"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label htmlFor="floatingInput">Category Name</label>
      </div>
      <div className="form-floating mb-5">
        <input
          type="url"
          className="form-control"
          id="apiUrl"
          placeholder="API URL"
          onChange={(e) => setApiUrl(e.target.value)}
        />
        <label htmlFor="apiUrl">API URL</label>
      </div>
      <div className="mt-2">
        <Category className="add-category" onClickHandler={onAddHandler}>
          <span>
            <img src={addIcon} alt="add"/> Add
          </span>
        </Category>
      </div>
    </Card>
  );
};
const AddCategory = (props) => {
  const onAddHandler = (formData) => {
    props.handleAdd(formData);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handleClose={props.handleClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay handleAdd={onAddHandler} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default AddCategory;
