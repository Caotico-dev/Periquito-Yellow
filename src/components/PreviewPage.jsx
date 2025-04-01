import { useNavigate } from "react-router-dom";
import image from "../assets/images/images-m-color/periquito-azul.jpg";

function PreviewPage({
  tittle = "Tittle preview",
  preview = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. took a galley of type and scrambled it to make a type specimen book.",
  images = image,
  url = "/Periquito-Yellow/Dominantes",
}) {

    const  navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    }   

  return (
    <div className="preview-page">
      <h3 className="preview-tittle">{tittle}</h3>
      <img className="preview-img" src={images} alt={tittle} />
      <p className="preview-text">{preview}</p>
      <button className="preview-btn" onClick={handleClick}>Ver mas</button>
    </div>
  );
}

export default PreviewPage;
