import SimpleCard from "./SimpleCard";
function PageAlojamiento() {
  return (
    <div className="container">
      <SimpleCard
        title="Alojamiento"
        text={[
          "El alojamiento de los periquitos (Melopsittacus undulatus) es el entorno artificial diseñado para garantizar las condiciones óptimas de bienestar físico y psicológico de esta especie en cautiverio. Este alojamiento comprende una estructura cerrada (habitualmente una jaula) con dimensiones apropiadas para permitir el vuelo corto, equipada con elementos esenciales como perchas de distintos diámetros, comederos, bebederos, juguetes de estimulación cognitiva y, en caso de reproducción, un nido. Debe ubicarse en un lugar con condiciones ambientales controladas —temperatura estable (entre 18 °C y 24 °C), buena ventilación sin corrientes de aire, exposición a luz natural indirecta, y ausencia de contaminantes—, y mantenerse con un protocolo de higiene regular que prevenga enfermedades y fomente la salud general del ave.",
        ]}
        subtopics={[{
            title:"Jaula adecuada",
            text:"La jaula debe ser lo suficientemente grande como para que el periquito pueda moverse, volar y estirarse sin dificultades. Debe ser al menos 50 cm de largo, 40 cm de ancho y 40 cm de alto para un solo periquito. Si tienes más de uno, necesitarás una jaula más grande."
        },{
            title:"Barras Horizontales",
            text:"Asegúrate de que las barras sean de material seguro (como acero inoxidable o metal) y con espacios entre ellas de 1 a 1.5 cm para evitar que el periquito se escape o quede atrapado."
        },{
            title:"Ubicación de la jaula",
            text:"La jaula debe situarse en una zona interior segura, bien ventilada pero libre de corrientes de aire, fuera del alcance de la luz solar directa y alejada de fuentes de calor como estufas o cocinas. También debe mantenerse fuera de zonas de alto tráfico, ruidos fuertes (como televisores o radios) y lejos de alimentos y utensilios humanos, ya que los periquitos son sensibles a ciertos vapores o alimentos tóxicos (como el teflón, chocolate o aguacate)."
        },{
            title:"Formas de jaulas",
            text:"Se recomienda una jaula de forma rectangular y horizontal, ya que facilita el desplazamiento natural de los periquitos (vuelo lateral). Las jaulas redondas deben evitarse, ya que dificultan la orientación del ave y pueden provocar desorientación o estrés crónico."
        },{
            title:"Accesorios básicos",
            text:"Deben incluirse perchas de distintos grosores y materiales naturales (como ramas de árboles no tóxicos), comederos y bebederos accesibles, y juguetes que promuevan el enriquecimiento ambiental, como columpios, cuerdas, campanas o espejos (aunque el uso de espejos debe ser controlado)."
        },{
            title:"Altura y estabilidad:",
            text:"Es preferible que la jaula esté a una altura media o alta (a nivel de los ojos), ya que los periquitos se sienten más seguros por encima del nivel del suelo. Además, debe colocarse sobre una superficie estable para evitar movimientos bruscos o caídas."
        },{
            title:"Cobertura nocturna",
            text:"Se recomienda cubrir parcialmente la jaula por las noches con una tela liviana y transpirable, para proteger al ave del frío, la luz artificial excesiva y ayudar a mantener un ciclo regular de sueño (10 a 12 horas de oscuridad diaria)."
        }]}
      />
    </div>
  );
}

export default PageAlojamiento;
