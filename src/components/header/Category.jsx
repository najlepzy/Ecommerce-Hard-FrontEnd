import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <ul>
      <li>
        <Link className="links" to="category/procesador">{props.itemUno}</Link>
      </li>

      <li>
        <Link className="links" to="category/placa madre">{props.itemDos}</Link>
      </li>

      <li>
        <Link className="links" to="category/fuente">{props.itemTres}</Link>
      </li>

      <li>
        <Link className="links" to="category/placa de video">{props.itemCuatro}</Link>
      </li>
    </ul>
  );
};

export default Category;
