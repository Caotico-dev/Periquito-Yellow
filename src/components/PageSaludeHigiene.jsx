import SimpleCard from "./SimpleCard";
function PageSaludeHigiene() {
  return (
    <div className="container">
      <SimpleCard
        title="Higiene"
        text={[
          "La higiene y cuidado de la jaula de los periquitos comprende el conjunto de prácticas destinadas a mantener un entorno limpio, seguro y saludable dentro del espacio donde habitan las aves. Esto incluye la limpieza regular del suelo, perchas, comederos, bebederos, y accesorios, así como la desinfección periódica de la estructura de la jaula para prevenir la proliferación de bacterias, hongos, parásitos y malos olores. Un mantenimiento adecuado reduce el riesgo de enfermedades y contribuye al bienestar físico y psicológico del periquito.",
        ]}
        subtopics={[
          {
            title: "Limpieza regular",
            text: "Es importante limpiar la jaula regularmente para evitar la acumulación de bacterias y mantener un ambiente saludable. Cambia la papelera del fondo de la jaula y limpia las perchas, los comederos y bebederos al menos una vez por semana.",
          },
          {
            title: "Bañarse",
            text: "Los periquitos disfrutan bañarse y esto también es útil para mantener su plumaje limpio y saludable. Puedes colocar un pequeño recipiente con agua para que se bañen, o bien, rociarlos ligeramente con un pulverizador con agua tibia (evita el agua fría o caliente).",
          },
          {
            title: "Interacción social",
            text: "Los periquitos son aves muy sociales, por lo que necesitan la compañía de otros periquitos o la interacción frecuente con sus dueños. Si tienes solo un periquito, asegúrate de pasar tiempo con él todos los días para que no se sienta solo ni estresado.",
          },
          {
            title: "Cuidado de la pareja",
            text: "Si decides tener una pareja de periquitos, asegúrate de que ambos tengan una jaula suficientemente grande y que puedan convivir sin problemas. No todos los periquitos se llevan bien, por lo que es importante observar su comportamiento y asegurarte de que no haya peleas.",
          },
        ]}
      />
      <SimpleCard
        title="Salud"
        text={[
          "La salud de los periquitos se refiere al estado general de bienestar físico, conductual y fisiológico de estas aves, que se manifiesta en su apariencia, actividad, alimentación y comportamiento. Mantener una buena salud implica una dieta equilibrada, alojamiento adecuado, higiene constante y la prevención y detección temprana de enfermedades mediante observación regular de signos clínicos como pérdida de apetito, cambios en el plumaje, comportamiento inusual o alteraciones en las heces. También incluye el acceso a controles veterinarios periódicos con un especialista en aves, vacunación si es necesario y el aislamiento inmediato de ejemplares enfermos para evitar contagios.",
        ]}
        subtopics={[
          {
            title: "Revisión veterinaria",
            text: "Al igual que otras mascotas, los periquitos deben ser revisados periódicamente por un veterinario especializado en aves para asegurarse de que están saludables.",
          },
          {
            title: "•	Síntomas de enfermedad: ",
            text: "Los periquitos pueden ocultar bien las señales de enfermedad, por lo que es importante estar atento a cualquier cambio en su comportamiento, como falta de apetito, plumaje opaco, dificultad para respirar, o cambio en el color de las heces. Si notas algo extraño, consulta a un veterinario inmediatamente.",
          },
          {
            title: "Volar y ejercicio",
            text: "Los periquitos necesitan espacio para volar y hacer ejercicio. Si no tienen la oportunidad de volar en libertad, asegúrate de que la jaula sea lo suficientemente grande para que puedan moverse y estirarse. Si puedes, permite que tu periquito tenga tiempo fuera de la jaula en un entorno seguro.",
          },
          {
            title: "Juguetes",
            text: "Los periquitos son muy juguetones y necesitan estímulos. Proporcionales juguetes como campanitas, pelotas, espejos (aunque con moderación) y ramas de madera para que se distraigan y ejerciten sus picos.",
          },{
            title:"Nidos",
            text:"Si tienes un par de periquitos y deseas que se reproduzcan, asegúrate de proporcionar un nido adecuado. Puede ser una caja de madera o una jaula con un espacio especial para anidar."
          },{
            title:"Cuidado de los polluelos",
            text:"Durante el proceso de cría, la hembra pondrá entre 4 y 6 huevos. Los polluelos nacerán después de 18 a 21 días de incubación, y los padres los alimentarán hasta que estén listos para volar (aproximadamente a los 30 días de vida)."
          },{
            title:"Temperatura adecuada",
            text:": Los periquitos son aves sensibles a las temperaturas extremas. La temperatura ideal para ellos es de 18-24°C. Asegúrate de que su entorno no sea ni demasiado caluroso ni frío."
          }
        ]}
      />
    </div>
  );
}

export default PageSaludeHigiene;
