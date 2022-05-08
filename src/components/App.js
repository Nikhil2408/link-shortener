import React, {useState} from "react";

import '../styles/App.css';
import LinkForm from './LinkForm/LinkForm';
import DisplayShortenLink from './DisplayShortenLink/DisplayShortenLink';

function App() {

  const [shortenedURL, setShortenedURL] = useState("");

  async function shortenURL(orgURL){
    setShortenedURL(await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        "Authorization" : `${process.env.REACT_APP_ACCESS_TOKEN}`,
        "Content-Type"  : "application/json"
      },
      body: JSON.stringify({ "long_url": orgURL, "domain": "bit.ly"})
    }).then((response) => response.json()).then((data) => data.link));
    
  }

  return (
    <div className="App-header">
      <LinkForm shortenURL = {shortenURL}/>
      <DisplayShortenLink shortenedURL = {shortenedURL}/>
    </div>
  );
}

export default App;
