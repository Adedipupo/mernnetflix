import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./listitem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(()=> {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjliNDhlYTM5YzE4YjQxMzI0OTFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njg0NDY4NiwiZXhwIjoxNjU3Mjc2Njg2fQ.UXraduof68fDeWgVzogm56yKttiFIZIClCqEOZbaUTk"
          }});
        setMovie(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie();
  },[item]);
  return (
    <Link to={{pathname : "/watch", state:{movie : true}}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow  className="icon"/>
              <Add className="icon"/>
              <ThumbUpOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}
