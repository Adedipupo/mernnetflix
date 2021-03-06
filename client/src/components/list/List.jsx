import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List({list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNum, setSlideNum] = useState(0);

    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current?.getBoundingClientRect().x ?? - 50;
        if (direction === "left" && slideNum > 0) {
            setSlideNum(slideNum - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNum < 5) {
            setSlideNum(slideNum + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className="list">
      <span className="listTitle">{list?.title}</span>
      <div className="wrapper">
          <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
          <div className="container" ref={listRef}>
            {list?.content.map((item,i) => (
              <ListItem index={i} key={`item.id + ${i++}`} item={item} />
            ))}
           
          </div>
          <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}
