import Article from "../article/article";

const ArticlesList = (props) => {
  return (
    <div>
      {props.articles?.length ? (
        props.articles.map((article) => {
          return (
            <Article
              key={article.url}
              title={article.title}
              author={article.author}
              publishedAt={article.publishedAt}
              description={article.description}
              imgUrl={article.urlToImage}
            />
          );
        })
      ) : (
        <h6 className="fst-italic mt-5 text-center">
          "Umm, we could not find any articles. May be try with a different
          one?"
        </h6>
      )}
    </div>
  );
};

export default ArticlesList;
