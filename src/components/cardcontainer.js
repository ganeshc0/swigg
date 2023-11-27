import Restaurantcard from "./Restaurantcard";
import Searchbar from "./Searchbar";
import { useState,useEffect } from "react";
import Filter from "./Filter"
import Carousel from "./Carousel"
import Slidebar from "./Slidebar";
import useRestaurant from "../Custom_hooks/useRestaurant";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const Cardcontainer =()=>{

  const restaurantList = useRestaurant();
 
    return(
      
    <>
      {/* <div className='main_container'>
							<div className='carousel'>
								<h1 className="carousel_title">
									Best offers for you
								</h1>
								<div className='carousel_container'>
									<Swiper
										slidesPerView={2.5}
										spaceBetween={30}
										keyboard={{
											enabled: true,
										}}
										mousewheel={true}
										navigation={true}
										modules={[Keyboard, Mousewheel, Navigation]}
										className="mySwiper"
									>
										{
											 restaurantList?.new_restaurant.new_carousel.map(restaurant => (
												<SwiperSlide key={restaurant?.id}>
													<Carousel {...restaurant} />
												</SwiperSlide>
											))
										}

									</Swiper>
								</div>
							</div>
          </div>     */}
      { restaurantList?.master_restaurant.length !==0 ?
       <>
        <Searchbar collection={ restaurantList?.master_restaurant} updater={restaurantList?.update} />
        <Carousel collection={restaurantList?.new_carousel} />
        <Slidebar collection={restaurantList?.new_slideBar} />
        <Filter collection={ restaurantList?.master_restaurant} updater={restaurantList?.update} />

        <div className="d-flex flex-wrap text-content-center py-2" style={{gap:"20px"}}>
          {
            (restaurantList?.new_restaurant.length !== 0)?
            restaurantList?.new_restaurant.map((restaurant)=>
            <Restaurantcard key={restaurant?.info?.id} {...restaurant?.info} /> 
            ):<h1 className="search"><img className="searchImg" src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-3428237-2902696.png?f=webp" /></h1>
          } 
        </div> 
      </> : <div className="loding">
                 <div className="spinner-border text-center" role="status">
                     <span className="visually-hidden ">Loading</span>
                 </div>
             </div>
    }
  </>

    )

};
export default Cardcontainer;




















// functional calling with props;
// {/* <Restaurantcard  title={restaurantlist[0]?.info.name} rating={restaurantlist[0]?.info.avgRating} cuisines={restaurantlist[0]?.info.cuisines.join(", ")} location={restaurantlist[0]?.info.locality} imgId={`${img_url}${restaurantlist[0]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[1]?.info.name} rating={restaurantlist[1]?.info.avgRating} cuisines={restaurantlist[1]?.info.cuisines.join(", ")} location={restaurantlist[1]?.info.locality} imgId={`${img_url}${restaurantlist[1]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[2]?.info.name} rating={restaurantlist[2]?.info.avgRating} cuisines={restaurantlist[2]?.info.cuisines.join(", ")} location={restaurantlist[2]?.info.locality} imgId={`${img_url}${restaurantlist[2]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[3]?.info.name} rating={restaurantlist[3]?.info.avgRating} cuisines={restaurantlist[3]?.info.cuisines.join(", ")} location={restaurantlist[3]?.info.locality} imgId={`${img_url}${restaurantlist[3]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[4]?.info.name} rating={restaurantlist[4]?.info.avgRating} cuisines={restaurantlist[4]?.info.cuisines.join(", ")} location={restaurantlist[4]?.info.locality} imgId={`${img_url}${restaurantlist[4]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[5]?.info.name} rating={restaurantlist[5]?.info.avgRating} cuisines={restaurantlist[5]?.info.cuisines.join(", ")} location={restaurantlist[5]?.info.locality} imgId={`${img_url}${restaurantlist[5]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[6]?.info.name} rating={restaurantlist[6]?.info.avgRating} cuisines={restaurantlist[6]?.info.cuisines.join(", ")} location={restaurantlist[6]?.info.locality} imgId={`${img_url}${restaurantlist[6]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[7]?.info.name} rating={restaurantlist[7]?.info.avgRating} cuisines={restaurantlist[7]?.info.cuisines.join(", ")} location={restaurantlist[7]?.info.locality} imgId={`${img_url}${restaurantlist[7]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[8]?.info.name} rating={restaurantlist[8]?.info.avgRating} cuisines={restaurantlist[8]?.info.cuisines.join(", ")} location={restaurantlist[8]?.info.locality} imgId={`${img_url}${restaurantlist[8]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[9]?.info.name} rating={restaurantlist[9]?.info.avgRating} cuisines={restaurantlist[9]?.info.cuisines.join(", ")} location={restaurantlist[9]?.info.locality} imgId={`${img_url}${restaurantlist[9]?.info.cloudinaryImageId}`} />
//       <Restaurantcard title={restaurantlist[10]?.info.name} rating={restaurantlist[10]?.info.avgRating} cuisines={restaurantlist[10]?.info.cuisines.join(", ")} location={restaurantlist[10]?.info.locality} imgId={`${img_url}${restaurantlist[10]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[11]?.info.name} rating={restaurantlist[11]?.info.avgRating} cuisines={restaurantlist[11]?.info.cuisines.join(", ")} location={restaurantlist[11]?.info.locality} imgId={`${img_url}${restaurantlist[11]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[12]?.info.name} rating={restaurantlist[12]?.info.avgRating} cuisines={restaurantlist[12]?.info.cuisines.join(", ")} location={restaurantlist[12]?.info.locality} imgId={`${img_url}${restaurantlist[12]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[13]?.info.name} rating={restaurantlist[13]?.info.avgRating} cuisines={restaurantlist[13]?.info.cuisines.join(", ")} location={restaurantlist[13]?.info.locality} imgId={`${img_url}${restaurantlist[13]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[14]?.info.name} rating={restaurantlist[14]?.info.avgRating} cuisines={restaurantlist[14]?.info.cuisines.join(", ")} location={restaurantlist[14]?.info.locality} imgId={`${img_url}${restaurantlist[14]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[15]?.info.name} rating={restaurantlist[15]?.info.avgRating} cuisines={restaurantlist[15]?.info.cuisines.join(", ")} location={restaurantlist[15]?.info.locality} imgId={`${img_url}${restaurantlist[15]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[16]?.info.name} rating={restaurantlist[16]?.info.avgRating} cuisines={restaurantlist[16]?.info.cuisines.join(", ")} location={restaurantlist[16]?.info.locality} imgId={`${img_url}${restaurantlist[16]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[17]?.info.name} rating={restaurantlist[17]?.info.avgRating} cuisines={restaurantlist[17]?.info.cuisines.join(", ")} location={restaurantlist[17]?.info.locality} imgId={`${img_url}${restaurantlist[17]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[18]?.info.name} rating={restaurantlist[18]?.info.avgRating} cuisines={restaurantlist[18]?.info.cuisines.join(", ")} location={restaurantlist[18]?.info.locality} imgId={`${img_url}${restaurantlist[18]?.info.cloudinaryImageId}`} /> 
//       <Restaurantcard title={restaurantlist[19]?.info.name} rating={restaurantlist[19]?.info.avgRating} cuisines={restaurantlist[19]?.info.cuisines.join(", ")} location={restaurantlist[19]?.info.locality} imgId={`${img_url}${restaurantlist[19]?.info.cloudinaryImageId}`} />   */}


   // <Restaurantcard title={restaurant?.info?.name}
            //  rating={restaurant?.info?.avgRating} 
            //  cuisines={restaurant?.info?.cuisines.join(", ")} 
            //  location={restaurant?.info?.locality} 
            //  imgId={`${img_url}${restaurant?.info?.cloudinaryImageId}`} />


             {/* <div className='main_container'>
							<div className='carousel'>
								<h1 className="carousel_title">
									Best offers for you
								</h1>
								<div className='carousel_container'>
									<Swiper
										slidesPerView={2.5}
										spaceBetween={30}
										keyboard={{
											enabled: true,
										}}
										mousewheel={true}
										navigation={true}
										modules={[Keyboard, Mousewheel, Navigation]}
										className="mySwiper"
									>
										{
											  newRestaurant.new_carousel.map(restaurant => (
												<SwiperSlide key={restaurant?.id}>
													<Carousel {...restaurant} />
												</SwiperSlide>
											))
										}

									</Swiper>
								</div>
							</div>
          </div>     */}