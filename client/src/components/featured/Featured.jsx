import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}){
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentry">Documentary</option>
                </select>
            </div>
        )}
            <img src="https://venturebeat.com/wp-content/uploads/2020/04/ff7remake.jpg?fit=3341%2C1871&strip=all" alt="user" width="100%" />

            <div className="info">
               <img src="https://flyclipart.com/thumb2/insatiable-82865.png" alt="user" />
               <span className="desc">
               Whoops! It looks like you might not be logged in because we saw no writing activity for you last week. Please log back in to keep your writing in tip-top shape and stay in the loop about your epic stats and achievements!
               </span>
               <div className="buttons">
                   <button className="play">
                       <PlayArrow/>
                       <span>Play</span>
                   </button>
                   <button className="more">
                       <InfoOutlined/>
                       <span>Info</span>
                   </button>
               </div>
            </div>
    </div>
  )
}


