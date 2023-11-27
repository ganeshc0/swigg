async function addApi(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const swiggy = await response.json();
        return response.json();
        console.log(swiggy);
    
}
export default addApi;