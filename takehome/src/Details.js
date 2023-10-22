import "./styles.css";
import { useState } from "react";

const DEFAULT_ICON_PATH = "../icons/icon-right.png";
const HOVER_ICON_PATH = "../icons/arrow-line.png";


/*
 * Component to display text of images
 */
const Details = ({ data }) => {
  const [{ header, title, content }] = data;
  const [hover, setHover] = useState(false);

  /*
  * Logic to toggle icon of button
  */
  const toggleIconImage = () => {
    setHover(!hover);
  }

  return (
    <div className="details-container">
      <>
        <h5 className="header">{header}</h5>
        <span className="title">{title}</span>
        <p className="para">{content}</p>
      </>
      <button className="button" onMouseEnter={toggleIconImage} onMouseLeave={toggleIconImage}>
        Learn More
        {hover ? <> <img className = "hover" src={HOVER_ICON_PATH}/><img className = "default" src={DEFAULT_ICON_PATH} alt="Icon"/> </>
        :
        <img className = "default" src={DEFAULT_ICON_PATH} alt="Icon" style= {{marginLeft: '10px'}}></img>}
        </button>
    </div>
  );
};

export default Details;
