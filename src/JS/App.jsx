import React, { useEffect, useState } from "react";
import { Route, Router, useParams } from "react-router";
import { Link } from "react-router-dom";
import "../CSS/App.css";
//Import components
import Header from "./Header";
import Profile from "./Profile";
import axios from "axios";

const App = () => {
  const [profileData, setProfileData] = useState({});

  const [page, setPage] = useState(1);

  const url = useParams();

  // console.log("url ", url);

  const getData = async () => {
    const data = await axios.get(
      //"https://www.bungie.net/Platform/User/GetBungieNetUserById/12839397/",
      "https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018470748532/?components=200",
      //"https://www.bungie.net/Platform/User/GetMembershipsById/12839397/3/",
      //"https://www.bungie.net/Platform/"

      {
        mode: "no-cors",
        headers: { "X-API-Key": "f2c1eee566c0425da8a6a9e100578b6f" },
        "Access-Control-Allow-Origin": "true",
      }
    );
    const firstProfileData = Object.values(data.data.Response.characters.data)[
      url?.Id - 1 || 0
    ];
    setProfileData(firstProfileData);
  };

  useEffect(() => {
    getData();
  }, [url, page]);

  useEffect(() => {
    console.log(profileData);
  }, [profileData]);

  return (
    <div className="App">
      <Header />
      <Profile profileData={profileData} />
      <div className="Container">
        <button>
          <Link
            className="PageLink"
            to={`/${page}`}
            onClick={() => page > 0 && setPage(page - 1)}
          >
            Previous page
          </Link>
        </button>
        {/* <Link to={`/1`} onClick={() => setPage(1)}>
        {page}
      </Link> */}

        <button>
          <Link
            className="PageLink"
            to={`/${page}`}
            onClick={() => page <= 3 && setPage(page + 1)}
          >
            Next page
          </Link>
        </button>
      </div>
      {/* <Link to="/2">Click here!!!</Link>
      <Link to="/3">Click here!!!!!!</Link> */}
    </div>
  );
};

export default App;
