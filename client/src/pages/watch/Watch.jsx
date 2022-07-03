
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log("object", location);
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
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  );
}