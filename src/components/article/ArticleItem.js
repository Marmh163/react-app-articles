import "./ArticleItem.css"
console.log("ArticleItem css loaded")
function ArticleItem({ article }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card article-card">
                <img src={article.image} alt={article.title}></img>
                <div className="card-body">

                    <h3 className="card-title article-title">
                        {article.title}
                    </h3>

                    <p className="card-text article-description">
                        {article.description}
                    </p>

                    <p className="article-info">
                        <strong>نویسنده:</strong> {article.writter}
                    </p>

                    <p className="article-info">
                        <strong>دسته‌بندی:</strong> {article.category}
                    </p>

                    <p className="article-info">
                        <strong>زمان مطالعه:</strong> {article.readingTime} دقیقه
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ArticleItem