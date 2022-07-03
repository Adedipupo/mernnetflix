import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import axios from "axios"

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(()=> {
    const getRandom = async () => {
      try {
        const res = await axios.get(`/lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre: ""}`,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjliNDhlYTM5YzE4YjQxMzI0OTFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njg0NDY4NiwiZXhwIjoxNjU3Mjc2Njg2fQ.UXraduof68fDeWgVzogm56yKttiFIZIClCqEOZbaUTk"
          }
        });
        setLists(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getRandom();
  },[type,genre]);
  
  return (
    <div className="home">
      <Navbar/>
      <Featured type={type} />
      {lists.map((list)=>(
        <List key={Math.random()}  list={list}/>
      ))}
      <List/>
    
    </div>
  )
}

export default Home;