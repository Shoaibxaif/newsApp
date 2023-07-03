import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export class News extends Component {
  article =  [
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "The First-Time Tenant Making Most Of A Delayed Home in Mumbai | The Tenant - moneycontrol",
      "description": "In this episode of The Tenant meet Deep Ganatra, a tech professional who works for a unicorn and is a first-time tenant. Watch his story as he turns from a h...",
      "url": "https://www.youtube.com/watch?v=mVQnVThBi3c",
      "urlToImage": "https://i.ytimg.com/vi/mVQnVThBi3c/maxresdefault.jpg",
      "publishedAt": "2023-07-02T03:30:12Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Kaustubh Bhosale",
      "title": "Seven IPOs launching this week, which mainboard IPO to invest in this week? | Mint - Mint",
      "description": "Next week, two companies, Senco Gold and Synoptics Technologies, will be releasing their IPOs. Senco Gold is a jewelry retailer, while Synoptics Technologies is an IT services provider. Both companies have strong financial performance and growth prospects.",
      "url": "https://www.livemint.com/market/seven-ipos-launching-next-week-which-active-ipos-to-invest-in-coming-week-11688214934982.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/01/600x338/IP_m_21x414LiveMint_1688214975775_1688214976023.jpg",
      "publishedAt": "2023-07-01T17:35:07Z",
      "content": "Next week, seven public issuesthree mainstream and four for small and medium-sized enterpriseswill be released, creating a flurry of activity in the IPO market. Investors will have the chance to part… [+3910 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "PTI",
      "title": "UltraTech Cement Q1 sales rise 19.6% to 29.96 MT - Moneycontrol",
      "description": "The company produced 25.04 MT of cement in the April-June quarter a year ago, Aditya Birla Group firm said in a regulatory filing on Saturday.",
      "url": "https://www.moneycontrol.com/news/business/ultratech-cement-q1-sales-rise-19-6-to-29-96-mt-10888651.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/02/ultratech-cement-770x433.jpg",
      "publishedAt": "2023-07-01T16:16:09Z",
      "content": "Leading cement maker UltraTech's consolidated sales increased 19.64 percent to 29.96 million tonne (MT) in the first quarter ended June 2023.\r\nThe company produced 25.04 MT of cement in the April-Jun… [+876 chars]"
    }
  ]
  constructor() {
    super();
    console.log("hello")

    this.state={

      article : this.article,
      loading : false

      
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h1>NewsMonk</h1>
        <div className="row ">
          <div className="col-md-3">
            <NewsComponent
              title="Cricket"
              discription="discr"
              imageUrl="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            />
          </div>
          <div className="col-md-3">
            <NewsComponent />
          </div>
          <div className="col-md-3">
            <NewsComponent />
          </div>
          <div className="col-md-3">
            <NewsComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
