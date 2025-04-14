import SpacialCard from "./SpacialCard.jsx";
// imagenes periquito opalino
import p_opalino from "../assets/images/images-m-patron/periquito-opalino.jpg";
import p_opalinol from "../assets/images/images-m-patron/periquito-opalino-lupa.png";
//  imagenes periquito albino
import p_albino from "../assets/images/images-m-patron-plumas/periquito-albino.jpg";
import p_albinol from "../assets/images/images-m-patron-plumas/periquito-albino-lupa.png";
// imagenes periquito lutino
import p_lutino from "../assets/images/images-m-patron-plumas/periquito-lutino.jpg";
import p_lutinol from "../assets/images/images-m-patron-plumas/periquito-lutino-lupa.png";
// imagenes periquito canela
import p_canela from "../assets/images/images-m-patron-plumas/periquito-canela.jpg";
import p_canelal from "../assets/images/images-m-patron-plumas/periquito-canela-lupa.png";
// imagenes periquito lacewing
import p_lacewing from "../assets/images/images-m-patron-plumas/periquito-lacewing.jpg";
import p_lacewingl from "../assets/images/images-m-patron-plumas/periquito-lacewing-lupa.png";
// imagenes periquito texas
import p_texas from "../assets/images/images-m-patron-plumas/periquito-texas-clearbody.jpg";
import p_texasl from "../assets/images/images-m-patron-plumas/periquito-texas-clearbody-lupa.png";
// imagenes periquit fallow
import p_fallow from "../assets/images/images-m-patron-plumas/periquito-fallow.jpg";
import p_fallowl from "../assets/images/images-m-patron-plumas/periquito-fallow-lupa.png";

function PageLigadasAlSexo() {
  return (
    <div className="container">
      <SpacialCard
        title="Periquito Opalino"
        imagef={p_opalino}
        imagelup={p_opalinol}
        text={[
          "El periquito opalino es una mutación genética que afecta el patrón de color y diseño del plumaje de los periquitos (Melopsittacus undulatus), dándoles un aspecto muy distintivo y atractivo. Esta mutación es bastante popular entre los aficionados y criadores de periquitos debido a su elegancia y a la variación de colores y patrones que pueden exhibir",
        ]}
        crt={[
          {
            title: "Patron Plumaje",
            listcrt: [
              "En los periquitos opalinos, la característica más notable es la modificación en el diseño de las marcas onduladas negras. Normalmente, los periquitos tienen patrones ondulados negros que cubren la parte posterior del cuello y las alas. Sin embargo, en los opalinos, estas marcas se reducen o suavizan en la espalda, permitiendo que el color base del cuerpo se vea más.",
              "La parte inferior de la espalda, en lugar de ser predominantemente negra o con patrones, muestra un color sólido que coincide con el resto del cuerpo, ya sea verde, azul o cualquier otro color.",
              'Las marcas en las alas también son más suaves, lo que le da al periquito opalino un aspecto más limpio y "diluido" en comparación con los periquitos estándar.',
            ],
          },
          {
            title: "Coloración",
            listcrt: [
              "La mutación opalina puede ocurrir en combinación con casi cualquier color base (verde, azul, cobalto, malva, etc.). Esto significa que puedes encontrar periquitos opalinos en una variedad de colores, pero lo que los hace diferentes es cómo se distribuye el color a lo largo de su cuerpo.",
              "En la cabeza, el color suele ser más prominente, con un contraste más suave entre el color del rostro (generalmente amarillo o blanco) y el resto del cuerpo.",
            ],
          },
          {
            title: "Dorso Colorido",
            listcrt: [
              "A diferencia de los periquitos normales que tienen una espalda predominantemente oscura o con marcas negras, los opalinos tienen un color sólido que abarca toda la parte superior del dorso, lo que los hace destacar.",
              "El color del dorso suele coincidir con el color base del cuerpo, creando una apariencia uniforme y brillante.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación opalina es recesiva ligada al sexo. Esto significa que, para que una cría sea opalina, el gen debe ser transmitido tanto por el padre como por la madre, aunque en los machos puede ser portado sin mostrarse visualmente.",
              "Los criadores a menudo buscan combinar esta mutación con otras para crear periquitos con combinaciones de colores y patrones aún más inusuales.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Albino"
        imagef={p_albino}
        imagelup={p_albinol}
        text={[
          "El periquito albino es una mutación genética de los periquitos (Melopsittacus undulatus) que da lugar a un ave completamente blanca con ojos rojos. Este tipo de periquito carece de pigmentación en el plumaje debido a la ausencia de melanina, el pigmento que normalmente le da color a las plumas.",
        ]}
        crt={[
          {
            title: "Patron de plumaje",
            listcrt: [
              "El periquito albino tiene un plumaje blanco puro en todo su cuerpo, sin la presencia de otros colores o patrones típicos como el verde, azul o amarillo que se ven en otras mutaciones de periquitos.",
              "Dado que no tiene melanina, el periquito albino no presenta las típicas marcas de las ondulaciones que se encuentran en los periquitos estándar, como las del cuello o la espalda.",
              "El plumaje de los periquitos albinos es generalmente muy brillante y tiene un aspecto de blanco nieve.",
            ],
          },
          {
            title: "Coloración de los ojos",
            listcrt: [
              "Una de las características más distintivas del periquito albino es su color de ojos, que es de un rojo brillante debido a la falta de pigmento en el iris. Este color es muy llamativo y contrasta con su plumaje blanco.",
              "Los ojos rojos son una de las señales claras que identifican a un periquito albino, ya que no es común en otras mutaciones de periquitos.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación albina es recesiva, lo que significa que para que un periquito sea albino, ambos padres deben portar el gen recesivo para la albinismo. Si ambos padres no son albinos pero son portadores del gen, pueden tener descendencia albina.",
              "Debido a que es recesiva, un periquito albino solo puede nacer de padres que lleven el gen recesivo, incluso si estos no muestran la mutación en su plumaje.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Lutino"
        imagef={p_lutino}
        imagelup={p_lutinol}
        text={[
          "El periquito lutino es una mutación genética que afecta la coloración de los periquitos (Melopsittacus undulatus), produciendo un plumaje de color amarillo brillante en todo el cuerpo y ojos rojos, lo que los hace muy llamativos y populares entre los aficionados a las aves.",
        ]}
        crt={[
          {
            title: "Patrón de plumaje",
            listcrt: [
              "El periquito lutino tiene un plumaje completamente amarillo brillante. En su versión más común, el color es un amarillo intenso y homogéneo que cubre todo su cuerpo, a diferencia de otras mutaciones que tienen un patrón de colores más variados.",
              "Esta mutación afecta la pigmentación general del cuerpo, lo que significa que no presenta las marcas o el patrón de ondulaciones que otros periquitos, como el verde, tienen normalmente.",
            ],
          },
          {
            title: "Coloración de los ojos",
            listcrt: [
              "Una de las características más distintivas del periquito lutino son sus ojos rojos. Este color de ojos es una consecuencia directa de la falta de pigmentación en el iris, lo que crea un contraste visual muy fuerte con el plumaje amarillo.",
              "Los ojos rojos son comunes en periquitos albinos y lutinos, lo que los hace fácilmente identificables.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación de los periquitos lutinos es recesiva. Esto significa que para que un periquito sea lutino, ambos padres deben portar el gen recesivo para la mutación, aunque no necesariamente deben tener el plumaje amarillo, ya que pueden ser portadores del gen sin mostrarlo.",
              "Si un solo progenitor es lutino, las crías tendrán una probabilidad menor de ser lutinas, pero si ambos padres lo son o portan el gen, la posibilidad de que nazcan crías lutinas aumenta considerablemente.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Canela"
        imagef={p_canela}
        imagelup={p_canelal}
        text={[
          "El periquito canela es una mutación genética de los periquitos (Melopsittacus undulatus) que afecta la coloración de las plumas, dándoles un tono marrón o canela que resulta en un aspecto muy suave y atractivo. Esta mutación es especialmente apreciada por su color único y su capacidad para crear un contraste suave y natural en el plumaje del periquito.",
        ]}
        crt={[
          {
            title: "Patrón de plumaje",
            listcrt: [
              "El principal rasgo distintivo de un periquito canela es su color marrón claro o beige en lugar de los colores brillantes o vivos que se ven en otras mutaciones. Este color es más sutil, y generalmente, el tono canela cubre una parte significativa del cuerpo, especialmente las plumas de las alas, la espalda y el pecho.",
              "En algunas variantes, el color de las plumas puede variar entre tonos marrones o beige más claros y oscuros, creando un patrón más suave y con transiciones que hacen que el ave se vea menos contrastada que otras mutaciones.",
            ],
          },
          {
            title: "Coloración de la cara",
            listcrt: [
              "La cara de un periquito canela no cambia mucho respecto a otras mutaciones, pero a menudo tiene un tono de color ligeramente más oscuro o beige, en lugar de los tonos brillantes de las variedades verdes o amarillas que se ven en otros periquitos.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación de canela es recesiva, lo que significa que ambos padres deben portar el gen recesivo para que se exprese en la descendencia. Incluso si ambos padres no tienen un plumaje canela visible, pueden ser portadores del gen y transmitirlo a sus crías.",
              "Si ambos progenitores son portadores del gen o tienen la mutación, hay una mayor probabilidad de que nazcan crías con el plumaje canela.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Lacewing"
        imagef={p_lacewing}
        imagelup={p_lacewingl}
        text={[
          "El periquito lacewing es una mutación genética rara y atractiva en los periquitos (Melopsittacus undulatus) que da lugar a un plumaje con un tono amarillo pálido y una apariencia delicada. La mutación lacewing afecta principalmente a la coloración y la intensidad de los tonos en el plumaje, haciendo que el periquito tenga un aspecto suave y sutil, con un contraste menos pronunciado en comparación con otras mutaciones más comunes.",
        ]}
        crt={[
          {
            title: "Patrón de plumaje",
            listcrt: [
              "El principal rasgo distintivo de un periquito lacewing es su coloración suave y pálida. Generalmente, el plumaje es de un amarillo claro o crema, que parece más deslavado que el de otras variedades, como los periquitos lutinos o verdes.",
              "Esta mutación puede afectar tanto a las áreas del cuerpo como las alas y la cola, pero no suele ser tan brillante ni tan saturada como otras mutaciones de color amarillo o verde.",
            ],
          },
          {
            title: "Coloración de los ojos",
            listcrt: [
              "Al igual que otros periquitos con mutaciones de colores pálidos, los periquitos lacewing suelen tener ojos rojos. Este color de ojos es característico de las mutaciones como el albino o el lutino, y en el caso de los lacewing, agrega un contraste visual llamativo con el cuerpo de color claro.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "La mutación lacewing es recesiva, lo que significa que ambos padres deben portar el gen recesivo para que la mutación se exprese en la descendencia. Si un solo progenitor es portador del gen, la probabilidad de que los descendientes sean lacewing será baja, pero si ambos padres lo son, las probabilidades aumentan significativamente.",
              "Aunque la mutación lacewing puede ser difícil de detectar en algunos casos, su efecto es notable por su coloración suave y sus ojos rojos.",
            ],
          },
        ]}
      />
      <SpacialCard
        title="Periquito Texas"
        imagef={p_texas}
        imagelup={p_texasl}
        text={[
          "El periquito Texas es una mutación genética rara y única en los periquitos (Melopsittacus undulatus), que se caracteriza por un color de plumaje inusual. Este término generalmente se refiere a una variedad específica de periquitos que presentan una coloración combinada entre el verde y el amarillo, creando un aspecto bastante diferente y atractivo en comparación con otras mutaciones más comunes.",
        ]}
        crt={[
          {
            title: "Patrón de plumaje",
            listcrt: [
              "Los periquitos Texas suelen tener un plumaje con una mezcla de tonos verdes y amarillos. Esta combinación de colores no es tan común en otras mutaciones y les da un aspecto suave pero vibrante.",
              "En algunos casos, pueden presentar una coloración más deslavada o más suave que otros periquitos verdes, pero aún conservando una tonalidad distintiva que es característica de esta mutación.",
            ],
          },
          {
            title: "Coloración de la cara",
            listcrt: [
              "Los periquitos Texas pueden tener una cara ligeramente más pálida en comparación con los periquitos de color verde común, pero la diferencia no es tan pronunciada como en otras mutaciones. El rostro suele mantener un color similar al del resto del cuerpo.",
            ],
          },
          {
            title: "Herencia genética",
            listcrt: [
              "Esta mutación no tiene una herencia genética definida de manera simple como otras mutaciones recesivas o dominantes. En general, los periquitos Texas se consideran una variación dentro de los periquitos de mutación verde, pero con una combinación particular de genes que da lugar a su coloración.",
              "A menudo se dice que esta mutación fue identificada en algunos criadores de periquitos en Texas, de ahí su nombre, aunque no hay evidencia científica concreta sobre su origen exacto.",
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
            title: "Patrón de plumaje",
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

export default PageLigadasAlSexo;
