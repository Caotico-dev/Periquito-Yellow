import Card from "./Card.jsx";
import ViewPage from "./ViewPage.jsx";
import PreviewPage from "./PreviewPage.jsx";
import SimpleCard from "./SimpleCard.jsx";
import SpacialCard from "./SpacialCard.jsx";
import ImagesViewer from "./ImagesViewer.jsx";

function Home() {
  return (
    <div className="container">
      <Card />
      <SpacialCard/>
      <SimpleCard />   
      <ImagesViewer/>   
      <ViewPage title={"Recomendaciones"}>
        <PreviewPage />
        <PreviewPage />
        <PreviewPage />
      </ViewPage>
    </div>
  );
}

export default Home;
