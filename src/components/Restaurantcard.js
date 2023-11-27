import { img_url } from "../utils/config";
import './restaurantcard.css';
import {Link} from 'react-router-dom';

const Restaurantcard = ({ name, avgRating, cuisines, locality, cloudinaryImageId,id }) => {
  return (
    <>
      <Link to={`/${id}`}  className="content">
        <div className="" style={{ height: "180px" }}>
          <img className="img-content" src={img_url + cloudinaryImageId} alt={name} width="100%" height="100%" />
        </div>
        <div className="text-content">
          <h4>{name}</h4>
          <h5><span className="avg">⭐ </span>{avgRating}</h5>
          <h5>{cuisines.join(", ")} </h5>
          <h5>{locality} </h5>
        </div>
      </Link>
    </>
  )
};
export default Restaurantcard;