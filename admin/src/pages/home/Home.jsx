import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WigdetSm from "../../components/widgetSm/WigdetSm";
import WigdetLg from "../../components/widgetLg/WigdetLg";
import "./home.css";
import {userData} from "../../data";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="Sales Analytics" grid dataKey="Active User"/>
      <div className="homeWigdet">
          <WigdetSm />
          <WigdetLg />
      </div>
    </div>
  )
}
