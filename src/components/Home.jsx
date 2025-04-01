import Card from "./Card.jsx";
import ViewPage from "./ViewPage.jsx";
import PreviewPage from "./PreviewPage.jsx";

function Home() {
  return (
    <div className="container">
      <Card />
      <ViewPage title={"Recomendaciones"}>
        <PreviewPage />
        <PreviewPage />
        <PreviewPage />
      </ViewPage>
    </div>
  );
}

export default Home;
