import { useState } from "react";
import restaurantlist from "../utils/dummyData";
import './searchbar.css'

const Searchbar =({collection,updater})=>{
  const [searchText,setSearchText]=useState("")
  const searchRestaurant = ()=>{
    const filterdRestaurants=collection.filter((restaurant)=>restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
    updater(filterdRestaurants);
    setSearchText("");
  }
  
    return(
      <>
      <div className="container py-4 d-flex justify-content-center">
         <input type="text" className="costum-input" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} placeholder="search your item"/>
         <button className="btn  btn-text-center" type="button" onClick={searchRestaurant}>Search</button>
       </div>
      </>
    ) 
};
export default Searchbar;