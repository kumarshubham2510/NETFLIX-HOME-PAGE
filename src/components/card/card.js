import React, { useEffect, useState } from "react";
import "./card.css";

import axios from "axios";

const Card = (props) => {
  const { title, isAdult, backdroPath, voteAverage, id } = props;
  const [isHovered, setHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };

  const [video, setVideo] = useState(null);
  const youtubeUrl = "https://www.youtube.com/embed/";

  useEffect(() => {
    const get = async () => {
      const { data } = await axios.get(`/movie/${id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      setVideo(data?.videos?.results[0]?.key);
    };
    get();
  }, [id]);

  const imageURL = `https://image.tmdb.org/t/p/w500${props.poster}`;
  return props.poster == null ? null : (
    <div
    className='card_warapper'
    style={{
      position: 'relative',
    }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
            {!isHovered && (
        <img  className="card_poster" src={imageURL} alt="poster"></img>
      )}
           {
        // If isHovered is true, then show the card_info
        isHovered && (
          <div className="card_info">
            <iframe
              width="100%"
              height="100%"
              src={`${youtubeUrl}${video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowfullscreen
            ></iframe>
          </div>
        )
      }


 
    </div>
  );
};

export default Card;
