import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WigdetSm from "../../components/widgetSm/WigdetSm";
import WigdetLg from "../../components/widgetLg/WigdetLg";
import "./home.css";
import {userData} from "../../data";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjliNDhlYTM5YzE4YjQxMzI0OTFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njg2NjI4MCwiZXhwIjoxNjU3Mjk4MjgwfQ.SEQpEEFxbtyLH96JNmu--QxGLhUIm6rYsie0SbuJ6IU",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userStats} title="User Analytics" dataKey="New User"/>
      <div className="homeWigdet">
          <WigdetSm />
          <WigdetLg />
      </div>
    </div>
  )
}
