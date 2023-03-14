import React ,{ useState, useEffect} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// import { getSources } from "./api/NewsApi";
import Axios from "axios";

import Article from "./components/articles/Article";
import axios from "axios";





export default function Feed({ sourceList }) {
  const animatedComponents = makeAnimated();

  const [newsCount, setNewsCount] = useState(0);

  const [sources, setSources] = useState("");
  const [view, setView] = useState("newsApi");
  const [search, setSearch] = useState("");

  const [news,setNews] = useState([])
  const fetchAllNews = () =>{
    const newsApi =
      "https://newsapi.org/v2/everything?q=car&apiKey=0f2afaa9d7a041c4829954e71f84c2df";
    const guardianApi = `https://content.guardianapis.com/search?q=car&format=json&page-size=50&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,standfirst,publication,short-url&order-by=relevance&api-key=test`;
    const nytApi = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=qhjIoG09y3Aagg9CjdH4ieoDKxEa0PzZ`;

    const getnewsApi = axios.get(newsApi);
    const getguardianApi = axios.get(guardianApi);
    const getnytApi = axios.get(nytApi);

    axios.all([getguardianApi, getnytApi, getnewsApi]).then(
      axios.spread((...allData) =>{
        const guardianApiData = allData[0].data.response.results;
        const nytApiData = allData[1].data.response.docs;
        const newsApiData = allData[2].data.articles;

        console.log(nytApiData);

        guardianApiData.map((article)=>{
          const sheme = createSheme(
            article.fields.thumbnail,
            "The Guardian",
            article.fields.publication,
            article.fields.headline,
            article.webUrl,
            article.webPublicationDate,
            article.fields.standfirst
          );   
           setNews((news) => [...news, sheme]);           
        })


         nytApiData.map((article) => {
          const sheme = createSheme(
            `https://www.nytimes.com/${article.multimedia[1].url}`,
            "New York Times",
            article.source,
            article.headline.main,
            article.web_url,
            article.pub_date,
            article.abstract
          );
          setNews((news) => [...news, sheme]);
        });


        newsApiData.map((article) => {
          
          const sheme = createSheme(article.urlToImage,
             "NewsApi",
             article.source.name,
             article.title,
             article.url,
             article.publishedAt,
             article.content
           );

           setNews((news) => [...news, sheme]);
        });
          })
          )
  }


  // Function for structuring data
  const createSheme = (img, apiname, source, title, url, date, desc) => {
    const sheme = {
      img: img,
      apiname: apiname,
      source: source,
      title: title,
      url: url,
      date: date,
      desc: removeHTML(desc),
    };
    return sheme
  };

  //RemoveHTHL Tags Fuction
  const removeHTML = (input) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = input;
    return tmp.textContent || tmp.innerText || "";
  };
  

  const getNewsBySource = (keyword, source) => {
    Axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&sources=${source}&apiKey=0f2afaa9d7a041c4829954e71f84c2df`
    )
      .then((response) => {
        setNews([]);
        const data = response.data.articles;
        data.map((article) => {
          const sheme = createSheme(
            article.urlToImage,
            "NewsApi",
            article.source.name,
            article.title,
            article.url,
            article.publishedAt,
            article.content
          );
          setNews((news) => [...news, sheme]);
        });
        // console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const getDataWithoutSource = (keyword) => {
    Axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=qhjIoG09y3Aagg9CjdH4ieoDKxEa0PzZ`
    )
      .then((res) => {
        setNews([]);
        const data = res.data.response.docs;

        data.map((article) => {
          const sheme = createSheme(
            `https://www.nytimes.com/${article.multimedia[1].url}`,
            "New York Times",
            article.source,
            article.headline.main,
            article.web_url,
            article.pub_date,
            article.abstract
          );
          setNews((news) => [...news, sheme]);
        });

      })
      .catch((error) => console.log(error));
  };



  const filterNews = ()=>{
    if (!sources == "") {
      setNews([]);
      getNewsBySource(search, sources);
    } else if(!search == '') {
        setNews([]);
        getDataWithoutSource(search)
    }else{
      setNews([]);
      fetchAllNews();
    }
  }

  useEffect(()=>{
    filterNews()
  },[search,sources])

  const updateSearchValue = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  useEffect(()=>{
    setNewsCount(news.length);
    // if (!sources == "") {
    //   getNewsBySource("cars", sources);
    // }
  },[news])



  return (
    <>
      <div className="feed">
        <div className="container feed-container">
          <div className="feed-header">
            <h2>News</h2>
            <p>Read the news online and save the trees</p>
          </div>
          <div className="filter grid">
            <div className="filter-input search">
              <label>Search News</label>
              <input
                type="text"
                onChange={updateSearchValue}
                placeholder="Search news..."
              />
            </div>
            <div className="filter-input filter-by-authors ">
              <label>Filter by Authors</label>
              <Select
                onChange={(newValue) => {
                  console.log(newValue);
                }}
                className="sss"
                placeholder="Select or type to search author"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={""}
                isMulti
                options={[
                  {
                    value: "ocean",
                    label: "Ocean",
                    color: "#00B8D9",
                    isFixed: true,
                  },

                  {
                    value: "blue",
                    label: "Blue",
                    color: "#0052CC",
                    isDisabled: true,
                  },
                  { value: "purple", label: "Purple", color: "#5243AA" },
                  {
                    value: "red",
                    label: "Red",
                    color: "#FF5630",
                    isFixed: true,
                  },
                  { value: "orange", label: "Orange", color: "#FF8B00" },
                  { value: "yellow", label: "Yellow", color: "#FFC400" },
                  { value: "green", label: "Green", color: "#36B37E" },
                  { value: "forest", label: "Forest", color: "#00875A" },
                  { value: "slate", label: "Slate", color: "#253858" },
                  { value: "silver", label: "Silver", color: "#666666" },
                ]}
              />
            </div>
            <div className="filter-input filter-by-Source ">
              <label>Filter by Source</label>
              <Select
                onChange={(newValue) => {
                  let sourceArr = "";
                  if (newValue.length > 0) {
                    newValue.forEach((source, index) => {
                      if (index == 0) {
                        sourceArr += `${source.value}`;
                      } else {
                        sourceArr += `,${source.value}`;
                      }

                      setSources(sourceArr);
                    });
                  } else {
                    setSources("");
                  }

                  console.log(newValue);
                  // setSources(newValue);
                }}
                placeholder="Select or type to search source"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                // options={getSources()}
                options={sourceList}
              />
            </div>
          </div>
          <p className="total-feeds">
            {`Total ${newsCount} news found in this search criteria`}
          </p>
          <div className="feed-cards grid">
            {Array.isArray(news)
              ? news.map((article, index) => {
                  return (
                    <Article
                      key={index}
                      img={article.img}
                      apiname={article.apiname}
                      source={article.source}
                      title={article.title}
                      url={article.url}
                      date={article.date}
                      desc={article.desc}
                    />
                    // <Article
                    //   key={index}
                    //   img={`https://www.nytimes.com/${article.multimedia[1].url}` }
                    //   apiname="The Guardian"
                    //   source={article.source}
                    //   title={article.abstract}
                    //   url={article.web_url}
                    //   date={article.publishedAt}
                    //   desc={article.lead_paragraph}
                    // />
                    // <Article
                    //   key={index}
                    //   img={article.urlToImage}
                    //   apiname="The Guardian"
                    //   source={article.source.name}
                    //   title={article.title}
                    //   url={article.url}
                    //   date={article.publishedAt}
                    //   desc={article.content}
                    // />
                  );
                })
              : console.log(null)}
          </div>
        </div>
      </div>
    </>
  );
}
