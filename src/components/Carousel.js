import { useState,useEffect } from "react";
import {img_car} from "../utils/config";
import './Style.css/carousel.css';

const Carousel = ({collection})=>{
    // console.log("abc",collection)
    // console.log("abc img",collection[0].imageId);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % collection.length);
      }, 3000); // Change slide every 3 seconds (adjust as needed)
  
      return () => {
        clearInterval(timer);
      };
    }, [collection.length]);
    
return(
  <div className="carousel-container1">
         {
         collection.map((item,index)=>{
           return(
            <>
               <div
          key={index}
          className={`carousel-slide ${
            index === currentIndex ? 'active' : ''
          }`}
        >
          <img src={`${img_car}${collection[index].imageId}`} alt={`Slide ${index + 1}`} />
        </div>
                
            </>
           )
         })
        }
       
    </div> 
)

}
export default Carousel;