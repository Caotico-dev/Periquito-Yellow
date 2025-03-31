import image from "../assets/images/images-m-color/periquito-azul.jpg";

function Card({
  title = "Card title",
  images = image,
  text = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
}) {
  return (
    <section className="card-section">
      <h2 className="card-tittle">{title}</h2>
      <img src={images} alt={title} className="card-img" />
      <div className="card-container-text">
        {text.map((text, index) => (
          <p className="card-text" key={index}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Card;
