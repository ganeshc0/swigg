import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuList from "./MenuList";
import useMenu from "../Custom_hooks/useMenu";


const Menu = () => {
    const { id } = useParams();
    // console.log('custom_prams', id);
    // const dispatch = useDispatch();
    const menuList = useMenu(id);
    // console.log("menulist",menuList);
    const [menuOpenState, setMenuOpenState] = useState(Array(menuList.normal_items.length).fill(false));

    const handleActiveIndex = (val) => {
        const newMenuOpenState = [...menuOpenState];
        console.log("new menu ", newMenuOpenState);
        newMenuOpenState[val] = !newMenuOpenState[val];
        setMenuOpenState(newMenuOpenState);
    }

    return (
        <>


            <div className="menu">

                {
                    menuList.normal_items.map((item, index) => {
                        return (
                            <>
                                <div key={item?.card?.card?.title}>
                                    <h3 onClick={() => handleActiveIndex(index)}>{item?.card?.card?.title}</h3>


                                    {
                                        item?.card?.card?.itemCards.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={item?.card?.info?.id}>
                                                        <MenuList key={item?.card?.info?.id} {...item?.card?.info} />
                                                    </div>
                                                </>
                                            )
                                            console.log("data add", item);
                                        })
                                    }
                                    {
                                        menuList?.nested_items.map((item, index) => {
                                            return (
                                                <div key={item?.card?.card?.title}>
                                                    <h4>{item?.card?.card?.title}</h4>

                                                    {
                                                        item?.card?.card?.categories.map((itemcategory, index) => {
                                                            return (
                                                                <>
                                                                    <h5>{itemcategory.title}</h5>

                                                                    <div>
                                                                        {
                                                                            itemcategory?.itemCards.map((itemcard, index) => {
                                                                                return (
                                                                                    <div key={itemcard?.card?.info?.id}>
                                                                                        <MenuList key={itemcard?.card?.info?.id} {...itemcard?.card?.info} />
                                                                                        {/* <button className="btn-add" onClick={()=>handleAddItem(itemcard)}>Add +</button><br/> */}
                                                                                        {/* <button className="btn" onClick={handleClearItem} >Clear</button> */}
                                                                                    </div>

                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </>
                                                            )
                                                        })


                                                    }

                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </>
                        )
                    })
                }

            </div>




        </>
    )

}

export default Menu;