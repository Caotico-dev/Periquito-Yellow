import image from "../assets/images/images-m-color/periquito-azul.jpg";
import imagelupa from "../assets/images/images-m-color/periquito-azul-lupa.png";

function SpacialCard({
  title = "Periquito Azul",
  imagef = image,
  imagelup = imagelupa,
  text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  crt = [
    {
      title: "Periquito Azul",
      listcrt: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Periquito Verde",
      listcrt: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Periquito Azul",
      listcrt: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ],
}) {
  return (
    <section className="spacial-Card border">
      <h2 className="spacial-card-title">{title}</h2>
      <div className="spacial-card-container">
        <img className="spacial-card-img" src={imagef} alt={title} />
        <div className="spacial-card-container-text">
          {text.map((text, index) => (
            <p className="spacial-card-text" key={index}>
              {text}
            </p>
          ))}
        </div>

        <img className="spacial-card-imglup" src={imagelup} alt={title} />

        <div className="spacial-card-container-crt">
          {crt.map((crt, index) => (
            <div className="spacial-card-crt" key={index}>
              <h3 className="scard-crt-title" key={index}>
                {crt.title}
              </h3>
              <ul className="scard-crt-list">
                {crt.listcrt.map((list, index) => (
                  <li className="scardcrt-list-item" key={index}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpacialCard;
