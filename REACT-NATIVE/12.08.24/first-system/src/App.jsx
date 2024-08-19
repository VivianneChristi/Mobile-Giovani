import Header from "./Components/Header";
import Card from "./Components/Card";
import "./app.css"
import Banner from "./Components/Banner";
import BannerCard from "./Components/BannerCards";
import Form from "./Components/Form";


function App() {
  return (
    <>
    <Header/> 
    <Banner/>
    <Card/>
    <BannerCard
      titulo="Banner Principal New"
      subtitulo="Lorem Ipsum New"
     />
    <Form/>
    </>
  );
}

export default App;
