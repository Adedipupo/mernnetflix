import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import axios from "axios"

const Home = ({type}) => {
  const [lists,setLists] = useState([]);

  useEffect(()=> {
    const getRandom = async () => {
      try {
        const res = await axios.get("/lists");
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className="home">
      <Navbar/>
      <Featured type={type} />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;