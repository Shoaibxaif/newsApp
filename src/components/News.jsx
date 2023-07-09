import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      hasMore: true,
    };
    document.title = `CurrentView - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  componentDidMount() {
    this.loadMoreArticles();
  }

  loadMoreArticles = async () => {
    if (!this.state.hasMore) {
      return;
    }

    this.setState({ loading: true });

    const { country, category, pageSize } = this.props;
    const { page, articles } = this.state;
    const nextPage = page + 1;

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d09b2978dfac40a2ac70a7518332df73&page=${nextPage}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();

      const newArticles = parsedData.articles;
      const totalResults = parsedData.totalResults;
      const hasMore = nextPage < Math.ceil(totalResults / pageSize);

      this.setState({
        articles: [...articles, ...newArticles],
        page: nextPage,
        totalResults: totalResults,
        hasMore: hasMore,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">
          CurrentView Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.loadMoreArticles}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsComponent
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
