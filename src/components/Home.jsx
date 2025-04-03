import Card from "./Card.jsx";
import ViewPage from "./ViewPage.jsx";
import PreviewPage from "./PreviewPage.jsx";
import SimpleCard from "./SimpleCard.jsx";

function Home() {
  return (
    <div className="container">
      <Card />
      <SimpleCard />      
      <ViewPage title={"Recomendaciones"}>
        <PreviewPage />
        <PreviewPage />
        <PreviewPage />
      </ViewPage>
    </div>
  );
}

export default Home;
