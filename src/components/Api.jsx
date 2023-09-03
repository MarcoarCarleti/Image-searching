import axios from "axios";
import { useEffect, useState } from "react";

const count = 1;

const LoadImages = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=rR0oOjts1yOqOxXl9opGVubLnZIsmV7v8WVBlBC6Yqo"
      )
      .then((data) => {
        setState(data.data);
      });
  }, [count]);

  return state;
};

const SearchImages = (query) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          query +
          "&client_id=rR0oOjts1yOqOxXl9opGVubLnZIsmV7v8WVBlBC6Yqo"
      )
      .then((data) => {
        setState    (data.data.results);
      });
  }, [query]);

  return state;
};

export { LoadImages, SearchImages };
