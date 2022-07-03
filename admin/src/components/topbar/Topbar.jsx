import { NotificationsNone,Language,Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

export default function  () {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topbarLeft">
              <span className="logo">DashAdmin</span>
          </div>
          <div className="topbarRight">
              <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBagde">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBagde">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Settings />
              </div>
              <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="topAvater" />
          </div>
      </div>
    </div>
  )
}
