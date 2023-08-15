import "./content.css";
import axios from "axios";
import { useEffect, useState } from "react";
import RowData from "../constants/URLs";
import Row from "../row/row";
function Content() {

    const [movies, setMovies]= useState([]);

  const getMovies = async () => {
    const response =await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        api_key: "292cc07af72e015e458bc4f0dab617fa",
      },
    });
    setMovies(response.data.results);
  };
  useEffect(() => {
    getMovies();
  });

  return <div className="content_wrapper">
    {RowData.map((el)=>{
        return <Row title={el.title} url={el.url} />
    })}
  </div>;
}

export default Content;
