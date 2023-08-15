import React from "react";
import "./row.css";
import axios from "axios";
import Card from "../card/card";
import { useState, useEffect } from "react";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(props.url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="row_wrapper">
        <div className="row_title">{props.title}</div>
        <div className="row_cards">
        {movies.map((el) => {
        return <Card title={el.title} poster={el.backdrop_path} id={el.id} />;
      })}
        </div>

    </div>
  );
};

export default Row;
