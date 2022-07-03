
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  return (
    <div className="watch">
      <Link to="/" className="back link">
        <ArrowBackOutlined />
        Home
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={location.state.movie.video}
      />
    </div>
  );
}