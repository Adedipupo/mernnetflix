import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import "./widgetsm.css";
import axios from "axios";

export default function WigdetSm() {
 const [newUser, setNewUser] = useState([])

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjliNDhlYTM5YzE4YjQxMzI0OTFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njg2NjI4MCwiZXhwIjoxNjU3Mjk4MjgwfQ.SEQpEEFxbtyLH96JNmu--QxGLhUIm6rYsie0SbuJ6IU",
          },
        });
        setNewUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUser();
  }, []);
  console.log("first", newUser);
  return (
    <div className="smallWidget">
      <span className="smallWigdetTitle">
        Newly Join Members
      </span>
      <ul className="smallWigdetList">
        {newUser.map((user) =>( 
        <li className="smallWigdetListItem">
        <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="" className="smallWigdetImage" />
        <div className="smallWigdetUser">
          <span className="smallWigdetUsername">{user.username}</span>
        </div>
        <button className="smallWigdetButton">
          <Visibility className="smallWigdetIcon"/>
          Display
        </button>
        </li>
        ))}
      </ul>
    </div>
  )
}
