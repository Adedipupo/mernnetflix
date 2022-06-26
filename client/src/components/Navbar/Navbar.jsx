import { ArrowDropDownOutlined, LaptopWindows, Notifications, SearchOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.scroll = null)

    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
              <img src="https://cdn.iconscout.com/icon/free/png-256/netflix-3628944-3030169.png" alt="logo"/>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
          </div>
          <div className="right">
              <SearchOutlined className="icon"/>
              <span>KIDS</span>
              <Notifications className="icon"/>
              <img src="https://cdn.playdislyte.com/wp-content/uploads/2022/04/Tevor-Sphinx-avatar.png" alt="user" />
            <div className="profile">
             <ArrowDropDownOutlined className="icon"/>
             <div className="options">
                 <span>Settings</span>
                 <span>Logout</span>
             </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
