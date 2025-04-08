import Card from "./Card.jsx";
import SimpleCard from "./SimpleCard.jsx";
import ViewPage from "./ViewPage.jsx";
import PreviewPage from "./PreviewPage.jsx";
import periquitoverde from "../assets/images/images-m-color/periquito-verde.jpg";
import imgalimentacion from "../assets/images/periquito-alimentacion.jpeg";
import imgalojamiento from "../assets/images/periquito-alojamiento.jpg";
import calcgenetica from "../assets/images/calcu-genetica.jpg";

function Home() {
  return (
    <div className="container">
      <Card
        title="Historia y descubrimiento"
        images={periquitoverde}
        text={[
          'Los periquitos, conocidos científicamente como Melopsittacus undulatus, son aves pequeñas y coloridas originarias de Australia. También conocidos como periquitos australianos o "budgies" (abreviatura de "budgerigars" en inglés), estas aves pertenecen a la familia de los loros y son populares como mascotas debido a su tamaño, su capacidad para imitar sonidos y su naturaleza social.',
          'El periquito fue descrito por primera vez en 1805 por el naturalista inglés George Shaw. Los exploradores europeos encontraron por primera vez estas aves en la vasta naturaleza de Australia, donde vivían en grandes bandadas en regiones áridas. Su nombre aborigen es "Betcherrygah", que significa "buena comida" en referencia a la creencia de que estos pájaros eran comestibles.',
          "La edad promedio de un periquito en cautiverio puede variar dependiendo de los cuidados que reciba, pero generalmente viven entre 7 y 10 años. Con un cuidado excelente, una dieta balanceada y un ambiente adecuado, algunos periquitos pueden llegar a vivir hasta 15 años o más. En la naturaleza, su vida suele ser más corta debido a los depredadores, enfermedades y condiciones ambientales, y su esperanza de vida es de unos 5 años.",
        ]}
      />
      <SimpleCard
        title="Reproducción de los periquitos"
        text={[
          "Los periquitos son aves prolíficas y pueden reproducirse fácilmente bajo las condiciones adecuadas. Aquí te explico algunos aspectos importantes sobre su reproducción:",
        ]}
        subtopics={[
          {
            title: "Madurez sexual",
            text: "Los periquitos alcanzan la madurez sexual entre los 4 y 6 meses de edad, aunque no es recomendable permitir que se reproduzcan hasta que tengan al menos un año de edad, ya que esto les da tiempo de desarrollarse completamente y estar más saludables para la reproducción.",
          },
          {
            title: "Época de reproducción",
            text: "En su hábitat natural, la reproducción de los periquitos está influenciada por las lluvias, que aseguran una abundancia de alimentos. En cautiverio, los periquitos pueden reproducirse en cualquier momento del año, siempre que las condiciones sean óptimas, como una dieta rica y acceso a un nido adecuado.",
          },
          {
            title: "Formación de la pareja",
            text: "Los periquitos forman vínculos de pareja muy fuertes. Se debe permitir que ellos elijan su pareja para mejorar la probabilidad de éxito en la reproducción. Una vez que se forma una pareja, se les debe proporcionar un nido, que suele ser una caja especial para periquitos.",
          },
          {
            title: "Puesta de huevos",
            text: "La hembra pondrá entre 4 y 8 huevos, generalmente uno cada dos días. Estos huevos se incuban durante unos 18 a 21 días. La hembra es la que se encarga principalmente de la incubación, mientras que el macho se ocupa de alimentarla.",
          },
          {
            title: "Nacimientos y cría",
            text: 'Una vez que los huevos eclosionan, los polluelos nacen ciegos y sin plumas. Dependiendo del número de huevos, los polluelos irán naciendo en días distintos. Durante las primeras semanas, la madre los alimenta con una sustancia llamada "papilla", que regurgita. Los polluelos comienzan a emplumar alrededor de las 3 semanas de edad y salen del nido cuando tienen aproximadamente 5 semanas.',
          },
          {
            title: "Desarrollo de los polluelos",
            text: "A las 6-8 semanas de vida, los jóvenes periquitos ya están completamente emplumados y son independientes, aunque aún pueden depender un poco de los padres antes de valerse por sí mismos.\
                Es importante cuidar bien la alimentación de los padres durante la cría, asegurándose de que tengan suficiente calcio y proteínas para mantener su energía y salud durante este proceso.",
          },
        ]}
      />
      <ViewPage title="Paginas Recomendadas">
        <PreviewPage
          tittle="Alimentacion"
          preview="La alimentación del periquito consiste en una dieta balanceada de semillas, frutas, verduras y agua fresca, esencial para su salud, energía y plumaje brillante."
          images={imgalimentacion}
          url="/Periquito-Yellow/Alimentacion"
        />
        <PreviewPage
          tittle="Alojamiento"
          preview="Jaula adecuada: La jaula debe ser lo suficientemente grande como para que el periquito pueda moverse, volar y estirarse sin dificultades. Debe ser al menos 50 cm de largo, 40 cm de ancho y 40 cm de alto para un solo periquito. Si tienes más de uno, necesitarás una jaula más grande."
          images={imgalojamiento}
          url="/Periquito-Yellow/Alimentacion"
        />
        <PreviewPage
          tittle="Calculadora Genetica"
          preview="Una calculadora genética es una herramienta que permite predecir las posibles combinaciones genéticas y características heredadas en la descendencia a partir de los genes de los padres."
          images={calcgenetica}
          url="/Periquito-Yellow/Calculadora"
        />
      </ViewPage>
    </div>
  );
}

export default Home;
