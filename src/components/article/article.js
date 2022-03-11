import Card from "../card/card";
import "./article.scss";

const Article = (props) => {
  return (
    <Card className="d-flex flex-row p-4 w-100 mt-3">
      <div className="w-75 pe-5">
        <h6 className="heading">{props.title}</h6>
        <div className="meta-info d-flex flex-row flex-wrap">
          <div>{props.author}</div>
          <div className="divider align-self-center"></div>
          <div>{props.publishedAt}</div>
        </div>
        <div className="content mt-3">{props.description}</div>
      </div>
      <div className="w-25">
        <img className="w-100 h-100" src={props.imgUrl}></img>
      </div>
    </Card>
  );
};

export default Article;
