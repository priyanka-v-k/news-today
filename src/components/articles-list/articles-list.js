import Article from "../article/article";

const ArticlesList = (props) => {
  return (
    <div>
      {props.articles?.length
        ? props.articles.map((article) => {
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
        : null}
    </div>
  );
};

export default ArticlesList;
