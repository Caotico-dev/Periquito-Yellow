import SpacialCard from "./SpacialCard.jsx";
// imagen periquito azul
import p_azul from "../assets/images/images-m-color/periquito-azul.jpg";
import p_azull from "../assets/images/images-m-color/periquito-azul-lupa.png";
// imagen periquito pio recesivo
import p_piorecesivo from "../assets/images/images-m-patron/periquito-pio-recesivo.jpg";
import p_piorecesivol from "../assets/images/images-m-patron/periquito-pio-recesivo-lupa.png";
// imagen periquito alas claras
import p_alasclara from "../assets/images/images-m-patron-plumas/periquito-alas-claras.jpg";
import p_alasclaral from "../assets/images/images-m-patron-plumas/periquito-alas-claras-lupa.png";
// periquito alas gris
import p_alasgris from "../assets/images/images-m-patron-plumas/periquito-alas-gris.jpg";
import p_alasgrisl from "../assets/images/images-m-patron-plumas/periquito-alas-gris-lupa.png";
// periquito diluido
import p_diluido from "../assets/images/images-m-patron-plumas/periquito-diluido.jpg";
import p_diluidol from "../assets/images/images-m-patron-plumas/periquito-diluido-lupa.png";
// periquito alas negras
import p_alasnegras from "../assets/images/images-m-patron-plumas/periquito-alas-negras.jpg";
import p_alasnegrasl from "../assets/images/images-m-patron-plumas/periquito-alas-negras-lupa.png";
// periquito follow
import p_fallow from "../assets/images/images-m-patron-plumas/periquito-fallow.jpg";
import p_fallowl from "../assets/images/images-m-patron-plumas/periquito-fallow-lupa.png";

function PageRecesivas() {
  return (
    <div className="container">
      <SpacialCard
        title="Periquito Azul"
        imagef={p_azul}
        imagelup={p_azull}
        text={[
          "El periquito azul es una de las variaciones de color más populares y llamativas del periquito australiano (Melopsittacus undulatus). A diferencia de los periquitos salvajes, que suelen tener un plumaje predominantemente verde, los periquitos azules han sido el resultado de mutaciones genéticas seleccionadas por los criadores.",
        ]}
        crt={[
          {
            title: "Coloración del plumaje",
            listcrt: [
              "Los periquitos azules tienen un plumaje mayormente azul claro o celeste, a menudo con tonos más oscuros en las alas, que suelen ser grises o negras. En la parte del rostro y el pecho, los tonos suelen ser más claros. Los patrones ondulados negros característicos en las alas y la parte posterior del cuello también están presentes en la mayoría de los periquitos azules, aunque la intensidad puede variar.",
            ],
          },
          {
            title: "Variaciones de color",
            listcrt: [
              "Azul claro: Es el color predominante, con un tono celeste brillante en el cuerpo.",
              "Azul cobalto: Tiene un tono azul más oscuro y profundo.",
              "Azul malva: Es una variación aún más oscura, casi grisácea, pero con matices azulados.",
              "Albino azul: Es completamente blanco, pero tiene un ligero tono azul en las plumas (a veces es difícil de percibir).",
            ],
          },
          {
            title: "Mutacion genética",
            listcrt: [
              "El color azul en los periquitos es causado por una mutación genética que elimina los pigmentos amarillos del plumaje. El color verde característico de los periquitos salvajes es el resultado de la combinación de pigmentos amarillos y azules. Al perder el pigmento amarillo, el periquito se vuelve azul.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Pio Recesivo"
        imagef={p_piorecesivo}
        imagelup={p_piorecesivol}
        text={[
          'El periquito pío recesivo es una mutación genética en los periquitos (Melopsittacus undulatus) que afecta la distribución del color en su plumaje, dando lugar a un patrón "manchado" o "pío". La mutación "pío recesivo" es diferente de la variante dominante, ya que, en este caso, ambos padres deben portar el gen para que la mutación se exprese en las crías. Los periquitos pío recesivos suelen tener un aspecto visual muy llamativo, con manchas o áreas de color blanco o amarillo distribuidas por todo su cuerpo.',
        ]}
        crt={[
          {
            title: "Patron del pluma",
            listcrt: [
              "El principal rasgo distintivo de los periquitos pío recesivos es el patrón de plumaje irregular con manchas de color blanco o amarillo en su cuerpo.",
              "El color de fondo del cuerpo (generalmente verde, azul, o cualquier otra mutación base) se ve interrumpido por manchas de color claro, generalmente de un blanco puro o un amarillo pálido.",
              'Las manchas no tienen un patrón regular y pueden aparecer en cualquier parte del cuerpo, incluyendo la cabeza, las alas y la cola. Este patrón manchado es lo que hace que estos periquitos se vean "moteados" o "salpicados" de color claro.',
            ],
          },
          {
            title: "Coloración",
            listcrt: [
              "Los periquitos pío recesivos pueden tener cualquier color base, como verde, azul o incluso tonalidades malvas. La diferencia con otros periquitos es cómo se distribuyen las manchas claras en su plumaje.",
              'A pesar de las manchas, el color base del periquito sigue siendo visible, pero las manchas claras en el plumaje generalmente dan la impresión de que el periquito tiene un diseño irregular, similar a una "piel" moteada.',
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación pío recesivo es recesiva, lo que significa que para que se exprese en las crías, ambos padres deben portar el gen para la mutación, aunque no necesariamente ambos deben mostrar la mutación (pueden ser portadores).",
              "Si un periquito es portador del gen pío recesivo, puede transmitirlo a su descendencia sin exhibir la mutación. Si ambos padres son portadores del gen, existe una probabilidad de que las crías presenten el patrón pío recesivo.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Alas Claras"
        imagef={p_alasgris}
        imagelup={p_alasgrisl}
        text={[
          "El periquito de alas grises es una mutación genética que afecta el color de las alas de los periquitos (Melopsittacus undulatus), dándoles un tono grisáceo en las plumas. Esta mutación crea un contraste llamativo, especialmente cuando se combina con otras características de color base, como el verde o el azul. Aunque el gris en las alas es menos común que otras mutaciones, algunos criadores y aficionados aprecian esta variante por su apariencia elegante y sutil.",
        ]}
        crt={[
          {
            title: "Patron del plumaje",
            listcrt: [
              "Los periquitos de alas grises tienen un tono gris claro o gris oscuro en las plumas de sus alas. Este color gris puede extenderse desde la base de las alas hasta las puntas, creando un contraste con el color base del cuerpo.",
              "En comparación con los periquitos comunes, cuyas alas suelen ser de colores más vibrantes (amarillo, verde, azul, etc.), los periquitos de alas grises presentan un patrón más suave y sutil, lo que les da un aspecto elegante.",
              "Las alas grises pueden aparecer más uniformes o con un ligero gradiente, dependiendo de la intensidad del color gris y el patrón en las plumas.",
            ],
          },
          {
            title: "Coloración",
            listcrt: [
              "La mutación de alas grises puede combinarse con cualquier color base del periquito, como el verde, azul o cobalto. Por ejemplo, un periquito verde de alas grises tendría un cuerpo verde brillante, pero con un tono gris en sus alas que lo haría destacar.",
              "El color gris no cubre todo el cuerpo del periquito, sino solo las alas, lo que crea un contraste visual interesante entre el tono gris de las alas y el color base del resto del cuerpo.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación de alas grises es generalmente recesiva o dominante, dependiendo de la línea genética y las combinaciones con otras mutaciones. Si ambos padres portan el gen para las alas grises, la probabilidad de que las crías hereden este rasgo es mayor.",
              "Al ser una mutación recesiva, los periquitos que heredan el gen de alas grises deben recibir este gen de ambos padres para que la mutación se exprese completamente.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Diluido"
        imagef={p_diluido}
        imagelup={p_diluidol}
        text={[
          'El periquito diluido es una mutación genética que afecta el color del plumaje de los periquitos (Melopsittacus undulatus), haciéndolo más claro o "diluido" en comparación con la versión estándar del color. Este tipo de mutación crea un efecto visual en el que los colores del periquito se ven más apagados o pálidos, especialmente en los tonos verdes, azules y amarillos.',
        ]}
        crt={[
          {
            title: "Patron del Plumaje",
            listcrt: [
              "El principal rasgo distintivo de un periquito diluido es la reducción de la intensidad del color en su plumaje. Los colores, como el verde, azul, o amarillo, se ven más claros y menos saturados que en los periquitos de colores estándar.",
              "Este efecto diluido puede afectar todo el cuerpo del periquito o concentrarse en ciertas áreas, como las alas o la cola. El resultado es un periquito que luce más suave y menos vibrante en comparación con los periquitos con colores más intensos.",
            ],
          },
          {
            title: "Colaración",
            listcrt: [
              "En los periquitos diluidos de base verde, el color que normalmente sería un verde vibrante se diluye a un tono más claro, casi amarillento o verde pastel.",
              "En los periquitos de base azul, el azul intenso se vuelve un azul más apagado, y los periquitos de base amarilla o blanca pueden ver su color también más suave.",
              "Este diluido no se limita a un solo color base; puede ocurrir en varias combinaciones, dando lugar a una amplia gama de periquitos diluidos en diferentes tonos más suaves.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación diluida generalmente es recesiva, lo que significa que para que se exprese completamente en un periquito, ambos padres deben portar el gen para la dilución, aunque no necesariamente lo manifiesten.",
              "Si ambos padres son portadores del gen diluido, la probabilidad de que las crías hereden la mutación diluida es alta. Sin embargo, si solo uno de los padres porta este gen, las crías pueden ser portadoras, pero no necesariamente mostrarán la mutación.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Alas Claras"
        imagef={p_alasclara}
        imagelup={p_alasclaral}
        text={[
          "El periquito de alas claras es una mutación genética que afecta el color de las alas y la distribución de las marcas en los periquitos (Melopsittacus undulatus), creando un contraste visual interesante entre el cuerpo y las alas. Esta mutación se caracteriza por un tono más claro en las plumas de las alas, lo que hace que las alas se vean más pálidas en comparación con el resto del cuerpo del periquito.",
        ]}
        crt={[
          {
            title: "Patron del plumaje",
            listcrt: [
              "Los periquitos de alas claras tienen alas que se ven más claras en comparación con el resto del cuerpo. Las plumas de las alas suelen ser más suaves o descoloridas, con una ligera tonalidad que puede ser de color blanco, amarillo claro o incluso un tono gris pálido.",
              "Este cambio en las alas crea un contraste llamativo con el color base del cuerpo del periquito, que generalmente es verde, azul, cobalto, o algún otro color sólido.",
              "Aunque la mutación afecta principalmente las alas, a veces puede haber ligeros cambios en el color de la cola y la parte superior del cuerpo, con un ligero matiz más claro en estas áreas también.",
            ],
          },
          {
            title: "Colaración",
            listcrt: [
              "La mutación de alas claras puede combinarse con cualquier color base común de los periquitos, como verde, azul, malva, etc. El color de las alas se ve más claro en comparación con las plumas del resto del cuerpo, lo que crea un efecto visual agradable.",
              "Dependiendo de la variedad de la mutación, el color de las alas puede ser blanco o de un tono más claro en comparación con el cuerpo, pero no necesariamente afecta a las marcas o patrones ondulados de la espalda y el cuello, que son características comunes en los periquitos.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación de alas claras es recesiva, lo que significa que ambos padres deben portar el gen para que la mutación se exprese en la descendencia.",
              "Aunque los periquitos de alas claras pueden ser relativamente raros, la mutación se puede transmitir a las crías si ambos padres son portadores del gen, aunque no necesariamente tengan las alas claras ellos mismos.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Alas Negras"
        imagef={p_alasnegras}
        imagelup={p_alasnegrasl}
        text={[
          "El periquito de alas negras es una mutación genética relativamente rara en los periquitos (Melopsittacus undulatus) que afecta la coloración de las alas, volviéndolas de un tono negro o muy oscuro, creando un contraste visual interesante con el color base del cuerpo.",
        ]}
        crt={[
          {
            title: "Patron de plumaje",
            listcrt: [
              "En el periquito de alas negras, el rasgo más destacado es que las plumas de las alas tienen un color oscuro, que puede ser negro o un gris muy oscuro, creando un contraste visual significativo con el resto del cuerpo del periquito.",
              "Este patrón puede variar en intensidad y cobertura; algunas aves pueden tener alas completamente oscuras, mientras que en otras, el tono oscuro podría ser más limitado, afectando solo algunas plumas o partes de las alas.",
              "El resto del cuerpo puede ser de cualquier color base común, como verde, azul, amarillo o incluso combinaciones de estos, pero las alas se destacan por su color oscuro.",
            ],
          },
          {
            title: "Coloración",
            listcrt: [
              "Los periquitos de alas negras pueden tener un color de base que varía, pero la mutación de las alas negras generalmente crea un contraste con colores brillantes o pasteles en el cuerpo.",
              "Las alas negras pueden sobresalir especialmente en periquitos con tonos de base más claros, como los de color amarillo o blanco, ya que el contraste será más visible.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación de alas negras es recesiva, lo que significa que ambos padres deben portar el gen para que se exprese en las crías.",
              "Al ser recesiva, un periquito de alas negras generalmente debe recibir el gen de ambos padres, aunque no necesariamente ambos deben tener las alas negras visibles; pueden ser portadores del gen.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Fallow"
        imagef={p_fallow}
        imagelup={p_fallowl}
        text={[
          "El periquito fallow es una mutación genética relativamente rara en los periquitos (Melopsittacus undulatus), conocida por su apariencia única que combina una coloración suave con una alteración en la intensidad del pigmento en las plumas. Esta mutación está relacionada con una reducción en la cantidad de pigmento en el cuerpo del ave, lo que da lugar a un tono más claro y suave en su plumaje, especialmente en las áreas donde normalmente tendría una coloración más intensa.",
        ]}
        crt={[
          {
            title: "{Patron de plumaje",
            listcrt: [
              "Los periquitos fallow tienen un plumaje de color más suave y deslavado en comparación con otras mutaciones. La característica más notable es la falta de intensidad en los pigmentos amarillos o verdes, lo que les da una apariencia más pálida.",
              "El color básico puede variar entre verde, azul o amarillo, pero siempre presenta una tonalidad más suave. Es común que el plumaje tenga una especie de tono apagado o deslavado, y las marcas o patrones de las alas y el cuerpo son menos intensos que los de otras variedades.",
            ],
          },
          {
            title: "Ojos y rostro",
            listcrt: [
              "Una de las características más llamativas de los periquitos fallow es que suelen tener ojos oscuros o ligeramente oscuros. Esto les da un aspecto más suave y melancólico en comparación con otras mutaciones que pueden tener ojos rojos (como los periquitos lutinos o albinos).",
              "El rostro también puede parecer más pálido, con una coloración que se desvanece hacia el resto del cuerpo, lo que añade a su aspecto sutil y delicado.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación fallow es recesiva, lo que significa que ambos padres deben portar el gen recesivo para que la mutación se exprese en la descendencia. Si solo un progenitor es portador, la probabilidad de que los descendientes muestren la mutación es baja.",
              "Aunque es una mutación recesiva, los periquitos fallow pueden ser cruzados con otras mutaciones de colores, lo que puede dar lugar a una amplia variedad de combinaciones de colores, pero siempre con el carácter de una coloración más suave y menos saturada.",
            ],
          },
        ]}
      />
    </div>
  );
}
export default PageRecesivas;
