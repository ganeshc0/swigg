import { useState } from 'react';
import { img_sml } from '../utils/config';
import './Style.css/slidebar.css';


const Slidebar = ({ collection, imageId }) => {
    // console.log('slide bar', collection);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        console.log("next")
        setCurrentIndex((prevIndex) =>
            prevIndex === collection.length - 1 ? 0 : prevIndex + 1
        );
        console.log('currentIndex after nextSlide:', currentIndex,collection.length);
    };

    const prevSlide = () => {
        console.log("prev")
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? collection.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {/* <div className='slidebar d-flex py-2'>
                
                {
                    collection.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={`${img_sml}${collection[index].imageId}`} alt="silde menu" width="150px" height="190px" />
                            </div>
                        )
                    })
                }
            </div> */}
             <div className='slidebar-container'>
            <button className='slidebar-button left' onClick={prevSlide}>
                &lt;
            </button>
            <div className='slidebar'>
                {collection.map((item, index) => (
                    <div
                        key={index}
                        className={`slidebar-slide ${index===currentIndex?'active':''}`}
                    >
                        <img
                            src={`${img_sml}${collection[index].imageId}`}
                            alt='slide menu'
                            width='150px'
                            height='190px'
                        />
                    </div>
                ))}
            </div>
            <button className='slidebar-button right' onClick={nextSlide}>
                &gt;
            </button>
        </div>
        </>
    )
}

export default Slidebar;