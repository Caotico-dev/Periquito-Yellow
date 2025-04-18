import SimpleCard from "./SimpleCard";
function PageEnfermedades() {
  return (
    <div className="container">
      <SimpleCard
        title="Enfermedades"
        text={[
          "Los periquitos son aves robustas, pero como cualquier animal, pueden verse afectados por diversas enfermedades. Muchas veces, los periquitos pueden ocultar síntomas de enfermedad, por lo que es importante estar atento a cualquier cambio en su comportamiento o apariencia. A continuación, te proporciono una lista de algunas de las enfermedades más comunes en los periquitos y sus síntomas",
        ]}
        subtopics={[
          {
            title: "Enfermedades Respiratoria",
            text: "Las enfermedades respiratorias son comunes en los periquitos y pueden ser provocadas por bacterias, hongos o virus. Entre las causas más frecuentes se encuentran las infecciones bacterianas o fúngicas, así como la exposición a irritantes ambientales como el humo de cigarro o el polvo. Los síntomas típicos incluyen estornudos, tos, dificultad para respirar, secreción nasal u ocular, plumas desordenadas y pérdida de apetito. Ante la presencia de estos signos, es fundamental llevar al periquito a un veterinario especializado en aves, quien podrá realizar un diagnóstico adecuado y prescribir un tratamiento, que generalmente consiste en la administración de antibióticos o antifúngicos, según sea el caso.",
          },
          {
            title: "Psitacosis (Enfermedad de los loro)",
            text: "La psitacosis, también conocida como la enfermedad de los loros, es una infección bacteriana causada por *Chlamydia psittaci* que puede afectar a los periquitos y transmitirse a los humanos, lo que la convierte en una zoonosis. Debido a su capacidad de contagio, es fundamental tratarla con urgencia. Los síntomas más comunes incluyen letargo, dificultad para respirar, fiebre, aumento en la secreción ocular o nasal, inapetencia y pérdida de peso. El tratamiento consiste en la administración de antibióticos, como la doxiciclina, pero siempre bajo la supervisión de un veterinario especializado, ya que requiere atención inmediata y adecuada.",
          },
          {
            title: "Coccidios",
            text: "La coccidiosis es una enfermedad parasitaria intestinal causada por protozoos del género *Eimeria*. Aunque es más frecuente en polluelos, también puede afectar a periquitos adultos. Los síntomas característicos incluyen diarrea (en ocasiones con sangre), pérdida de peso, letargo y debilidad. El tratamiento debe ser indicado por un veterinario y suele consistir en la administración de medicamentos antimicrobianos o antiparasitarios para controlar la infección y aliviar los síntomas.",
          },
          {
            title: "Túbulos respiratorios bloqueados",
            text: "A veces, los periquitos pueden presentar dificultades respiratorias debido a la acumulación de cera o mucosa en los orificios nasales o en las vías respiratorias. Esta condición suele ser una complicación derivada de resfriados o infecciones previas. Entre los síntomas más comunes se encuentran la dificultad para respirar, secreción nasal espesa y estornudos frecuentes. Para tratar este problema, es importante mantener al periquito en un ambiente limpio y libre de polvo. Además, se recomienda acudir a un veterinario, quien podrá aplicar un tratamiento adecuado para despejar las vías respiratorias y mejorar la salud del ave.",
          },
          {
            title: "Afecciones en el sistema digestivo (Vómitos y diarrea)",
            text: "Los periquitos pueden presentar problemas digestivos como consecuencia de una mala alimentación o infecciones bacterianas. Cambios repentinos en la dieta o el consumo de alimentos contaminados suelen ser factores desencadenantes de estos trastornos. Los síntomas más comunes incluyen vómitos (que pueden parecer espumosos o líquidos), diarrea líquida con tonalidades verdosas o amarillas, letargo y pérdida de apetito. El tratamiento consiste en ajustar la dieta del ave, incorporando alimentos frescos y de alta calidad, especialmente verduras. Además, un veterinario podrá recetar medicamentos específicos para tratar posibles infecciones bacterianas o corregir desequilibrios en el sistema digestivo del periquito.",
          },
          {
            title: "Enfermedades fúngicas (Candidiasis)",
            text: "La candidiasis es una infección fúngica provocada por el hongo *Candida*, que suele afectar la cavidad bucal, el sistema digestivo o las vías respiratorias de los periquitos. Esta afección es relativamente común y puede comprometer la salud del ave si no se trata a tiempo. Los síntomas característicos incluyen la aparición de manchas blancas en la lengua o el pico (que pueden parecer restos de comida), dificultad para comer o tragar, letargo y pérdida de apetito. El tratamiento debe ser indicado por un veterinario y consiste en la administración de medicamentos antifúngicos específicos para eliminar la infección y favorecer la recuperación del periquito.",
          },
          {
            title: "Varroasis (Enfermedades de la piel)",
            text: "La varroasis es una enfermedad causada por la infestación de ácaros que afecta la piel y las plumas de los periquitos. Esta condición puede generar una gran incomodidad en el ave y, si no se trata adecuadamente, provocar complicaciones en su salud. Los síntomas más comunes incluyen la caída localizada de plumas, picazón intensa con rascado excesivo, y la aparición de lesiones o costras en la piel. Para tratar la varroasis, es fundamental acudir a un veterinario, quien podrá prescribir tratamientos antiparasitarios o medicinas tópicas específicas para eliminar los ácaros y aliviar los síntomas.",
          },
          {
            title: "Deficiencia de calcio (osteoporosis)",
            text: "La deficiencia de calcio es una afección común en las aves, incluidos los periquitos, y puede provocar huesos frágiles o deformados. Esta condición es especialmente frecuente en hembras que están en etapa de puesta de huevos, aunque también puede afectar a los machos si no reciben una cantidad adecuada de calcio en su dieta. Los síntomas típicos incluyen huesos débiles o fracturados, parálisis parcial de las patas o de la musculatura, y cambios notables en la postura del ave. El tratamiento consiste en asegurar que el periquito tenga acceso a una fuente constante de calcio, como bloques minerales, cáscaras de huevo trituradas o suplementos específicos recomendados por un veterinario.",
          },
          {
            title: "Tumores o quistes",
            text: "A medida que los periquitos envejecen, pueden desarrollar tumores o quistes en distintas partes del cuerpo, como el hígado, los ovarios o el sistema digestivo. Estas formaciones pueden afectar significativamente su salud si no se detectan y tratan a tiempo. Los síntomas más comunes incluyen pérdida de peso repentina, presencia de bultos o hinchazón en la zona abdominal y un comportamiento letárgico. El diagnóstico debe ser realizado por un veterinario especializado, quien evaluará el estado del ave y determinará el tratamiento más adecuado, que en algunos casos puede incluir cirugía o medicación específica.",
          },
          {
            title: "Obesidad",
            text: "Aunque la obesidad no se considera una enfermedad como tal, es un problema de salud común en los periquitos, generalmente causado por una dieta desequilibrada, especialmente rica en semillas grasas. Esta condición puede afectar negativamente su calidad de vida y predisponerlos a otras enfermedades. Los síntomas más evidentes son el aumento de peso y la inactividad, con una marcada falta de interés en volar o moverse. Para tratar la obesidad, es fundamental reducir la cantidad de alimentos con alto contenido graso e incorporar una mayor variedad de frutas y verduras frescas en la dieta. Además, se debe fomentar el ejercicio, permitiendo al periquito volar y moverse con libertad diariamente.",
          },
          {
            title: "Caída de plumas (Muda)",
            text: "La muda es un proceso natural en el que los periquitos pierden sus plumas viejas y las reemplazan por nuevas. Sin embargo, cuando la muda es excesiva o anormal, puede ser un signo de estrés o de una enfermedad subyacente. Los síntomas a tener en cuenta incluyen la pérdida irregular o excesiva de plumas, así como irritación o picazón en la piel. Si se observa que el periquito tiene una muda inusual o presenta problemas en la piel, es importante consultar a un veterinario para descartar cualquier condición médica y recibir el tratamiento adecuado.",
          },
        ]}
      />
    </div>
  );
}

export default PageEnfermedades;
