import { useState,useEffect } from "react";
import {api_url} from "../utils/config";


const useRestaurant =()=>{
    const[newRestaurant,setNewRestaurant]=useState([]);
    const[masterRestaurant,setMasterRestaurant]=useState([]);
    const[CarouselData,setCarouselData]=useState([]);
    const[slideBar,setSlideBar]= useState([]);

    useEffect(()=>{
        getRestaurants();
    
      },[])

    const getRestaurants = async()=>{
        try{
        const data = await fetch(api_url);
        const json = await data.json();
        console.log('response data',json);
        setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("setMasterRestaurant",json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
        setCarouselData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        console.log("caroseledata",json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    
        setSlideBar(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
        console.log("setSlideBar",json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
        }
        catch(error){
          console.log (error);
        }
      
      }
      
      const restaurantList ={
        new_restaurant:newRestaurant,
        master_restaurant:masterRestaurant,
        new_carousel:CarouselData,
        new_slideBar:slideBar,
        update:setNewRestaurant,
        update_carousel: setCarouselData,
        update_sildebar:setSlideBar
      }
   

      return  restaurantList;

}
export default useRestaurant;