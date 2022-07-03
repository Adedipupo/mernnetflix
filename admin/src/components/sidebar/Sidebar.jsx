import { ModalManager } from "@material-ui/core";
import { BrokenImageTwoTone, Chat, CropOriginalOutlined, Feedback, GraphicEq, LineStyle, Mail, Money, MoneyOutlined, PeopleOutlineTwoTone, PeopleTwoTone, ReportOff, ReportTwoTone, Timeline, TrendingUp } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [sidebar,setSidebar] = useState(false);
  const showSidebar = () =>{
    console.log("first");
    setSidebar(!sidebar);
  } 
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/" className="link">
                  <li className="sidebarListItem" onClick={showSidebar}>
                    <LineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
                  <li className="sidebarListItem" onClick={showSidebar}>
                    <Timeline className="sidebarIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Sales
                  </li>
              </ul>
          </div>
          <div className="sideMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PeopleOutlineTwoTone className="sidebarIcon"/>
                    Users
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <BrokenImageTwoTone className="sidebarIcon"/>
                    Products
                  </li>
                </Link>
                  <li className="sidebarListItem">
                    <MoneyOutlined className="sidebarIcon"/>
                    Transactions
                  </li>
                  <li className="sidebarListItem">
                    <GraphicEq className="sidebarIcon"/>
                    Reports
                  </li>
              </ul>
          </div>
          <div className="sideMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <Mail className="sidebarIcon"/>
                    Mail
                  </li>
                  <li className="sidebarListItem">
                    <Feedback className="sidebarIcon"/>
                    Feedback
                  </li>
                  <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    Messages
                  </li>
              </ul>
          </div>
          <div className="sideMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <CropOriginalOutlined className="sidebarIcon"/>
                    Manage
                  </li>
                  <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <ReportOff className="sidebarIcon"/>
                    Reports
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}
