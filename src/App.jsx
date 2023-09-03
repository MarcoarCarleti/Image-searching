import { useEffect, useState } from "react";

import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/image";

import "./App.css";

function App() {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();

  console.log(query);

  const data = LoadImages();

  const search = () => {
    setSearch(query);
  };
  const searchData = SearchImages(searchQ);
  console.log(searchData);

  return (
    <>
    <p>Image Serching</p>
      <div className="search-box">
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className="container">
        {searchQ
          ? searchData.map((img, key) => (
              <Image src={img.urls.thumb} key={key} />
            ))
          : data.map((img, key) => <Image src={img.urls.thumb} key={key} />)}
      </div>
    </>
  );
}

export default App;
