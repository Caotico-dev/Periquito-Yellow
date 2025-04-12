import SpacialCard from "./SpacialCard";
// images periquito verde
import p_verde from "../assets/images/images-m-color/periquito-verde.jpg";
import p_verdel from "../assets/images/images-m-color/periquito-verde-lupa.png";
// imagen periquito pio dominantes
import p_piodominante from "../assets/images/images-m-patron/periquito-dominante.jpg";
import p_piodominantel from "../assets/images/images-m-patron/periquito-dominante-lupa.png";
// imagen periquito cara amarilla
import p_caramarilla from "../assets/images/images-m-color/periquito-cara-amarilla.jpg";
import p_caramarillal from "../assets/images/images-m-color/periquito-cara-amarilla-lupa.png";
// Imagen periquito perlado
import p_perlado from "../assets/images/images-m-patron/periquito-perlado.jpg";
import p_perladol from "../assets/images/images-m-patron/periquito-perlado-lupa.png";
// imagenes periquito crestado
import p_crestado from "../assets/images/images-m-patron/periquito-crestado.jpg";
import p_crestadol from "../assets/images/images-m-patron/periquito-crestado-lupa.png";
function PageDominante() {
  return (
    <div className="container">
      <SpacialCard
        title="Periquito Verde"
        imagef={p_verde}
        imagelup={p_verdel}
        text={[
          "El periquito verde es la coloración natural y salvaje de los periquitos (Melopsittacus undulatus), originarios de Australia. Esta variedad es la que se encuentra en la naturaleza y ha sido la base genética para muchas de las mutaciones de color que se han desarrollado en cautiverio.",
        ]}
        crt={[
          {
            title: "Coloración del plumaje",
            listcrt: [
              "El cuerpo del periquito verde es predominantemente verde brillante, especialmente en la parte inferior, como el abdomen y el pecho.",
              "La cabeza y el rostro suelen ser de un color amarillo vibrante, con marcas onduladas negras en la nuca y la parte posterior de la cabeza.",
              "Las alas son una mezcla de verde y negro con marcas onduladas características de los periquitos, lo que les da un aspecto muy distintivo y camuflaje en su hábitat natural.",
              "La cola es de un color azul oscuro o verdoso, y las plumas de vuelo suelen tener matices azules o negros.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Pio Dominante"
        imagef={p_piodominante}
        imagelup={p_piodominantel}
        text={[
          'El periquito pío dominante es una mutación de color muy llamativa y única en los periquitos (Melopsittacus undulatus). Estos periquitos presentan un patrón de plumaje caracterizado por una combinación irregular de colores sólidos y áreas blancas o amarillas, lo que les da un aspecto "manchado" o "moteado". La mutación "pío" se refiere a la distribución del color, y en este caso, la mutación pío dominante es genética y bastante fuerte, lo que significa que si uno de los padres es pío dominante, hay una alta probabilidad de que las crías también lo sean.',
        ]}
        crt={[
          {
            title: "Patron de plumaje",
            listcrt: [
              "Los periquitos pío dominantes tienen un plumaje en el que el color base (que puede ser verde, azul o cualquier otro color) está interrumpido por áreas de blanco o amarillo en varias partes del cuerpo.",
              "El patrón puede variar significativamente entre un periquito y otro, lo que hace que no haya dos periquitos píos exactamente iguales. Algunas áreas del cuerpo pueden ser completamente blancas o amarillas, mientras que otras conservan los colores del periquito tradicional.",
              "El color de la cabeza también puede ser parcialmente blanco o amarillo, en lugar de cubrirse totalmente de ese color como en los periquitos estándar.",
            ],
          },
          {
            title: "Herencia Genetica",
            listcrt: [
              'La mutación "pío dominante" se transmite de manera dominante, lo que significa que si uno de los padres tiene esta mutación, hay una alta probabilidad de que las crías hereden el patrón pío.',
              "A diferencia del pío recesivo, en el cual ambos padres deben portar el gen para que el rasgo se exprese, en el pío dominante solo uno de los padres necesita ser pío para que los hijos puedan tener la mutación.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Cara Amarilla"
        text={[
          "El periquito cara amarilla es una variación del periquito común (Melopsittacus undulatus), y se destaca por tener un rostro de color amarillo brillante, contrastando con el color predominante de su cuerpo, que generalmente es azul. Esta variación es conocida por los criadores como mutación de cara amarilla y es bastante apreciada por su belleza única.",
        ]}
        imagef={p_caramarilla}
        imagelup={p_caramarillal}
        crt={[
          {
            title: "Coloración del rostro",
            listcrt: [
              ': El rasgo más distintivo es el color amarillo intenso en la cara, que a menudo se extiende hacia el cuello. El contraste con el resto del cuerpo, especialmente si es azul, crea una combinación de colores muy llamativa. En algunos casos, el amarillo puede "filtrarse" hacia otras partes del plumaje, dándole al periquito un tono verdoso.',
            ],
          },
          {
            title: "Cara amarilla tipo I",
            listcrt: [
              "En esta mutación, solo la cabeza es de color amarillo, mientras que el resto del cuerpo mantiene el color azul. A veces, el amarillo puede mezclarse ligeramente en las primeras plumas del cuello, pero no más allá.",
            ],
          },
          {
            title: "Cara Amarilla tipo II",
            listcrt: [
              "En este caso, el amarillo no solo está en la cabeza, sino que también se extiende al resto del cuerpo, lo que puede dar como resultado un tono verdoso en el periquito, especialmente en la parte superior del cuerpo, mientras que el abdomen sigue siendo más azulado.",
            ],
          },
          {
            title: "Cara dorada",
            listcrt: [
              "Esta es una variación más intensa, donde el amarillo es muy brillante y se extiende por gran parte del plumaje, a veces confundido con el color dorado.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Perlado"
        imagef={p_perlado}
        imagelup={p_perladol}
        text={[
          'El periquito perlado, también conocido como periquito con mutación perlada, es una de las variaciones de color y patrón más atractivas y apreciadas en el mundo de los periquitos (Melopsittacus undulatus). Esta mutación afecta la forma en que se distribuyen las marcas onduladas tradicionales de los periquitos, dándoles un aspecto "perlazo" o "bordado", lo que crea un diseño de plumaje suave y único.',
        ]}
        crt={[
          {
            title: "Patron del Plumaje",
            listcrt: [
              'La principal característica del periquito perlado es el diseño en las plumas de las alas y la espalda. En lugar de tener marcas negras onduladas y bien definidas, estas se ven reemplazadas por plumas claras con bordes oscuros, creando un aspecto de "perlas" o "escamas" en las alas.',
              "El contraste entre las plumas claras (generalmente amarillas o blancas) y los bordes oscuros (negros o grises) es lo que da la apariencia perlada.",
              'A diferencia de los periquitos comunes, las marcas de las alas no son completamente negras, sino que parecen como si las alas estuvieran "bordeadas" de manera delicada, dándoles un aspecto muy elegante y distintivo.',
            ],
          },
          {
            title: "Coloración",
            listcrt: [
              "El color base del periquito perlado puede ser azul, verde, malva o cualquier otra tonalidad. La mutación perlada afecta principalmente las alas y la parte posterior del cuerpo, pero no cambia el color base general.",
              "En los periquitos verdes perlados, por ejemplo, las alas pueden ser mayormente verdes, pero con el patrón perlado en los bordes de las plumas. En los periquitos azules perlados, las alas pueden ser azul claro o grisáceas con los mismos bordes perla.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación perlada es dominante, lo que significa que si uno de los padres es perlado, hay una probabilidad significativa de que las crías hereden este rasgo.",
              "Al ser dominante, el gen del periquito perlado puede ser fácilmente transmitido a las siguientes generaciones, lo que lo hace relativamente común en la cría selectiva de periquitos.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Crestado"
        imagef={p_crestado}
        imagelup={p_crestadol}
        text={[
          "El periquito crestado es una mutación genética interesante y atractiva en los periquitos (Melopsittacus undulatus), caracterizada por una cresta de plumas en la cabeza del ave, que le da un aspecto distintivo y elegante. Aunque esta característica física es llamativa, la mutación crestada no afecta significativamente su comportamiento ni su salud, pero sí es un rasgo muy apreciado por los criadores de periquitos.",
        ]}
        crt={[
          {
            title: "Cresta",
            listcrt: [
              "La característica más destacada del periquito crestado es la cresta de plumas que crece en la parte superior de su cabeza. Esta cresta puede variar en tamaño, forma y densidad, pero generalmente consiste en un pequeño grupo de plumas que sobresalen hacia arriba o hacia los lados, dándole un aspecto más llamativo y peculiar.",
              "La forma de la cresta puede variar entre ejemplares. Algunas crestas son más redondeadas, mientras que otras pueden ser más puntiagudas o más alargadas, dependiendo de la genética del periquito.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación crestada es dominante, lo que significa que si uno de los progenitores es portador del gen, es probable que los descendientes hereden la cresta.",
              "Los periquitos crestados pueden ser cruzados con otras mutaciones, y si uno de los padres tiene la cresta, es probable que los descendientes también la desarrollen. Sin embargo, no todos los descendientes necesariamente mostrarán este rasgo si ambos padres no lo tienen.",
            ],
          },
        ]}
      />
    </div>
  );
}
export default PageDominante;
