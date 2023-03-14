import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Customise from "./components/customise/Customise";
import Navbar from "./components/navbar/Navbar";
import Feed from "./Feed";
import Login from "./Login";
import Signup from "./Signup";
// import Brief from "./Brief";
// import Login from './Login';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";


import Axios from "axios";

function App() {

  const[sources,setSources] = useState('')
  const getSources = () => {
    let channels = [];

    Axios.get(
      "https://newsapi.org/v2/top-headlines/sources?apiKey=5f2b885265784d9bbfcb967b0e760652"
    )
      .then((response) => {
        const data = response.data.sources;
        console.log(data);
        for (let channel of data) {
          const domain = channel.url.split("w.")[1];
          channels.push({
            value: channel.id,
            label: channel.name,
            url: domain,
            color: "#00B8D9",
            isFixed: true,
          });
        }
      })
      .catch((error) => console.log(error));

    setSources(channels);
  };

  useEffect(()=>{
    getSources()
  },[])

  return (
    <>
      {/* <Customise/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Navbar />
      <Feed sourceList={sources} />
    </>
  );
}

export default App;
