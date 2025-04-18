import image from "../assets/images/images-m-color/periquito-azul.jpg";

function ImagesViewer({
  title = "Galería de Periquitos",
  images = [
    { src: image, caption: "Periquito azul" },
    { src: image, caption: "Periquito verde" },
    { src: image, caption: "Periquito amarillo" },
    { src: image, caption: "Periquito blanco" },
  ],
}) {
  return (
    <section className="imagesviewer-section border">
      <h2 className="imagesviewer-title">{title}</h2>
      <div className="container-imagesviewer">
        {images.map((img, index) => (
          <figure className="figure-imagesviewer" key={index}>
            <img src={img.src} className="imagesviewer" alt={img.caption} />
            <figcaption className="caption-imagesviewer">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ImagesViewer;
