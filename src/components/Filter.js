import './Style.css/filter.css';

const Filter = ({ collection, updater }) => {
  const handleClick = () => {
    const filterdData = collection.filter((item) => item?.info?.avgRating > 4);
    updater(filterdData);
    console.log("restaurant", filterdData);
  }

  const handleMe = () => {
    const filterdData = collection.filter((item) => item?.info?.veg === true);
    updater(filterdData);
    //   console.log("restaurant",filterdData);
  }

  const handleOn = () => {
    const filterdData = collection.filter((item) => item?.info?.sla?.deliveryTime <= 21);
    updater(filterdData);
    //  console.log("restaurant",newRestaurant);
  }

  const handleFilter = () => {
    const filterdData = collection.filter((item) => item?.info?.veg !== true);
    updater(filterdData);

  }

  const handlePriceRange = () => {
    updater(collection.filter((item) => {
      const cost = parseInt(item?.info?.costForTwo.replace(/\D/g, ""));
      return cost > 300 && cost < 600;
    }))
  }

  const handlePrice = ()=>{
    updater(collection.filter((item)=> {
      const cost = parseInt(item?.info?.costForTwo.replace(/\D/g,""));
      return cost<300 
    }))
  }

  // const handleReset  = ()=>{
  //   updater(collection);
  // }

  return (
    <div className="container mt-2 d-flex flex-wrap justify-content-center">
      <button className="btn  m-3" onClick={handleClick}>Rating 4.0 +</button>
      <button className="btn  m-3" onClick={handleMe} >Pure Veg</button>
      <button className="btn  m-3" onClick={handleOn} >Fastest Delivery</button>
      <button className="btn  m-3" onClick={handleFilter} >Non veg</button>
      <button className="btn  m-3" onClick={handlePriceRange} >Rs 300-600</button>
      <button className="btn  m-3" onClick={handlePrice} >Less than Rs 300</button>
      {/* <button className="btn  m-3" onClick={handleReset} >Reset</button> */}
    </div>

  )

}
export default Filter;

