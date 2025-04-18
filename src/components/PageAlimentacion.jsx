import SimpleCard from "./SimpleCard.jsx";
import ImagesViewer from "./ImagesViewer.jsx";
import alpiste from "../assets/images/images-alimentacion/alpiste.jpg";
import apio from "../assets/images/images-alimentacion/apio.webp";
import mijo_blaco from "../assets/images/images-alimentacion/mijo blanco.webp";
import mijo_rojo from "../assets/images/images-alimentacion/mijo rojo.jpg";
function PageAlimentacion() {
  return (
    <div className="container">
      <ImagesViewer
        title="Alimentos Recomendados"
        images={[
          {
            src: alpiste,
            caption: "Alpiste",
          },
          {
            src: apio,
            caption: "Apio",
          },
          {
            src: mijo_blaco,
            caption: "Mijo Blanco",
          },
          {
            src: mijo_rojo,
            caption: "Mijo Rojo ",
          },
        ]}
      />
      <SimpleCard
        title="Alimentacion"
        text={[
          "Una alimentación equilibrada es esencial para mantener la salud general, el sistema inmunológico, la vitalidad y la longevidad de los periquitos. Su dieta debe ser variada, nutritiva y adecuada a sus necesidades fisiológicas.",
        ]}
        subtopics={[
          {
            title: "Mezcla de semillas de alta calidad",
            text: "Las semillas comerciales específicas para periquitos (como alpiste, mijo blanco, mijo rojo y avena pelada) deben representar solo una parte de la dieta. Aunque son energéticas y aceptadas fácilmente, muchas semillas son altas en grasas y bajas en algunos nutrientes esenciales.",
          },
          {
            title: "Frutas seguras",
            text: "Manzana (sin semillas), uvas (sin semillas), pera, fresas, plátano, melón, papaya, kiwi.",
          },
          {
            title: "Verduras recomendadas",
            text: "Zanahoria, espinaca, brócoli, pepino, acelga, calabacín, apio, pimientos, lechuga romana (evitar lechuga iceberg).",
          },
          {
            title: "Suplementos de calcio",
            text: "El calcio es un mineral esencial para los periquitos, ya que contribuye al desarrollo de huesos fuertes, un metabolismo equilibrado y, en el caso de las hembras, a la correcta formación de las cáscaras de huevo. Para asegurar un buen aporte de este nutriente, se recomienda colocar en la jaula un bloque de calcio o hueso de sepia (cuttlebone), el cual debe estar siempre disponible. Además, pueden ofrecerse cáscaras de huevo esterilizadas y trituradas, que representan una fuente natural, económica y efectiva de calcio. Como complemento, también puede incluirse arenilla enriquecida con minerales, siempre y cuando esté libre de productos artificiales o colorantes.",
          },
          {
            title: "Agua limpia y fresca",
            text: "El acceso a agua limpia y fresca es indispensable para la salud de los periquitos, ya que la deshidratación o el consumo de agua contaminada puede provocar enfermedades graves. El agua debe cambiarse diariamente y mantenerse libre de restos de comida, excrementos o suciedad. Para minimizar la contaminación, se recomienda el uso de bebederos cerrados tipo tubo, que protegen el agua del contacto directo con el ambiente. En regiones o temporadas de clima cálido y seco, es importante revisar con mayor frecuencia el nivel y la frescura del agua para asegurar que los periquitos tengan siempre acceso adecuado a ella.",
          },
        ]}
      />
    </div>
  );
}
export default PageAlimentacion;
