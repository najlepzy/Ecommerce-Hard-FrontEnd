import { Link } from "react-router-dom";
import notfoundimage from "../img/404_image.png";

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', marginTop:'20rem', justifyContent:'center', alignItems:'center'}}>
      <img src={notfoundimage} alt="imagen" style={{width:"30rem"}}></img>
      <Link to="/" style={{marginTop:'1rem', textDecoration:'none', color: '#5b00fb'}}>
        <span>
          Volver a la pagina principal
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
