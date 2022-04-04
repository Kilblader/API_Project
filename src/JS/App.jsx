import React, { useEffect, useState } from "react";
import "../CSS/App.css";
//Import components
import Header from "./Header";
import axios from "axios";

function App() {
  const getData = async () => {
    const data = await axios.get(
      "https://www.bungie.net/Platform/User/GetBungieNetUserById/12839397/",
      {
        mode: "no-cors",
        headers: { "X-API-Key": "f2c1eee566c0425da8a6a9e100578b6f" },
        "Access-Control-Allow-Origin": "true",
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
