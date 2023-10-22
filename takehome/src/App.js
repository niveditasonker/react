import "./styles.css";
import Details from "./Details";
import ImageCarousel from "./ImageCarousel";

const detailsText = [
  {
    header: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet, est mollis evertitur ut",
    content:
      "Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed, an legere concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt, cetero consetetur philosophia mel in."
  }
];

let id = 0;

const photos = [
  { id: id++, url: "../images/carouselImg1.png", title: "Image 1" },
  { id: id++, url: "../images/carouselImg2.png", title: "Image 2" },
  { id: id++, url: "../images/carouselImg3.png", title: "Image 3" },
];

export default function App() {
  return (
    <div className="container">
      <img className="background-pattern" src="../images/backgroundPattern.png"></img>
      <Details data={detailsText}></Details>
      <ImageCarousel photos={photos}></ImageCarousel>
    </div>
  );
}
