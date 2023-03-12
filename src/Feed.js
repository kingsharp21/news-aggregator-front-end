import React ,{ useState, useEffect} from "react";

import Card from "./components/card/Card";
import Customise from "./components/customise/Customise";
import Axios from "axios";



export default function Feed() {
  const [Prefrence,setPrefrence]= useState({
    sports:'',
    business: '',
    health: ''
  })
  const [customise_setting, setCustomise_setting] = useState("hidden");
  const [data,setData]= useState('')
  const [topic,setTopic]= useState('')

  const fetchPrefrenceData = (interest) => {
    Axios.get(
      "https://newsapi.org/v2/everything?q=business&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=0f2afaa9d7a041c4829954e71f84c2df"
      //`https://newsapi.org/v2/everything?q=${interest}&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=0f2afaa9d7a041c4829954e71f84c2df`

    ).then((res) => {
      console.log(res.data.articles);
      // setData(res.data["articles"][0]);
      setData(res.data.articles);
      setTopic("cars");
    });
  };

  useEffect(() => {
  fetchPrefrenceData();
  },[]);

  const openPop = ()=>{
    setCustomise_setting('visible')
  }

  const closePop =()=>{
    setCustomise_setting("hidden");
  }


  return (
    <>
      <Customise visibility={customise_setting} close={closePop}/>
      <div className="feed">
        <div className="container feed-container">
          <div className="feed-header flex">
            <h2>Your topics</h2>
            {/* <h2>{data.author}</h2> */}
            <button onClick={openPop}>
              {" "}
              <i class="fa fa-sliders" aria-hidden="true"></i>
              Customise
            </button>
          </div>
          <div className="feed-cards grid">
            {/* <Card topic={topic} data={data} /> */}
            {data ? (
              <Card topic={topic} data={data} />
            ) : (
              // Display error msg
              ""
            )}
            {data ? (
              <Card topic={topic} data={data} />
            ) : (
              // Display error msg
              ""
            )}
            {data ? (
              <Card topic={topic} data={data} />
            ) : (
              // Display error msg
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
