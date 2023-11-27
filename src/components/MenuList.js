import './Style.css/menu.css';
import img1 from '../image/veg.png';
import img2 from '../image/Non_veg.png';
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { menu_url } from '../utils/config';

 
const MenuList = (props) => {
  //{ name, category, description, imageId, itemAttribute, price

  const dispatch = useDispatch();

  const handleAddItem = (val) => {
    dispatch(addItem(val))
    console.log("val", val, "addItem", addItem(val))
  }
  
  
 
  return (
  
    
    <>
      <div className="contant-menu">
        <div className='description'>
          <h1><b>{props.name}</b></h1>
          {
            props.itemAttribute.vegClassifier === 'VEG' ? <img className='icone-img' src={img1} /> : <img className='icone-img2' src={img2} />

          }
          <h3><b>{props.category}</b></h3>
          <h3>{"₹ " + props.price / 100}</h3>
          <h6>{props.description}</h6>
          <h4>{props.itemAttribute.vegClassifier === 'VEG'}</h4>

        </div>
        <div className='menu-bar'>
          <div className='img-menu' style={{ height: "180px" }}>
            <img src={menu_url + props.imageId} width="100%" height="80%" /><br />
            <button className="btn-add" onClick={() => handleAddItem(props)}>Add +</button><br />
            
          </div>

        </div>
      </div>
 
  </>  
  )
}
export default MenuList;