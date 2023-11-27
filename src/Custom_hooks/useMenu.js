import {useState , useEffect} from 'react';

const useMenu = (res_id)=>{
    const [menu, setMenu] = useState([]);
    const [nested, setNested] = useState([]);
    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
      
        const iteam_category = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const nested_category = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
        
    
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${res_id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log("menulist", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const MenuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card['@type'] === iteam_category)
        console.log("menu data", MenuData)
        setMenu(MenuData);
        console.log('menu data',setMenu);

        const NestedItem = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card['@type'] === nested_category)
        console.log("nested deta", NestedItem)
        setNested(NestedItem);

        setMenu(MenuData);
        setNested(NestedItem);
    }

    const menuList ={
        normal_items: menu,
        nested_items: nested
    }
    console.log("menulist",menu);

     return menuList ;

}

export default useMenu;