
import { Link } from 'react-router-dom';
import useOnline from '../Custom_hooks/useOnline';
import Instamart from './Instamart';
import './header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((store)=>store.menu.value);
  console.log('cartdata',cartData);
  const status = useOnline();
  return (
    <div>

      <header className="header">
        <a href="/" className="logo">Delive<span className="yellow">roo</span></a>
        {status?"🟢":"🔴"}
        <nav className="navbar">
          <Link to="">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">cart-{cartData.length}</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/" className="btn">Make an Order</Link>
          <Link to="/instamart">Instamart</Link>
            
        </nav>

        <div className="hamburger">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8jHyAZExUdGRr8/PxqaGlHRUYMAAQAAAAcGBkIAAAgHB329valpKTs7Oyop6dWVFSEg4M9OzsQCQtDQEFwbm6ysbGenZ1iYGDr6urh4eGPjo7a2trNzc2WlJXGxcVPTE16eHloiWWTAAACHElEQVR4nO3d4XKqMBCGYQhEE0QFopYjtrX3f5PV9sycX205WWfYpO9zBflmBcJkXYoCAAAAAAAAAAAAAAAAAAAAAAAA/+m1P1qdjv3rA/KdSheMVsGVJ2G+2rpNqdnG2VqUsFsvHeFH604S8Mktvf4Z3FN8wDaFgLeIbXTCUyIJ4+82R7P04mcxx+iEV7/04mfx1+iEQ7X04mephuiEq0RquIpOOCZyHY7RCbf6n/d36210wj+JPC120QmLt7D06mcIb/EBi9bov9d4H7+luTlX2qsYqrMk4K2K1gWv9QVq44Ozogp+uEzXsllr1JTX6SLO96nW6UHpAAAAAAAAAABAKnZ726106uxecPz7V927xvhKJ28a1wvPZ9qhWfqQ8AfNIDtAPOjvNzEHScBJewXvmik+4C77bpN9CiW8FXEfndDqvwrvjI1OmH/nHt2XSghqmP91mP+9NP9/I6Sxp3GCPU0S+9IQf5+5aw/aq9gcpM2Jk/L3Q9FP9FPu7/gAAAAAAAAAACAtSw9P+MKD0l36wSudi+GHXj4XYze6UKmdbVIFNwpPn85G+3wa40XzadpKf0eNbMZQ9nOi8p/1lf+8tvxn7q3S6E2k+/Ib+c8vTWUGbfzjIv85wr+g+zL7ed5F0enftgXRTPaiHtXP1R+lL8Lbje5vI8Tv2P55flH7fYuX5wfkAwAAAAAAAAAAAAAAAAAAAAAA+GXeAdrNTXprg95nAAAAAElFTkSuQmCC" alt="" />
        </div>

      </header>

    </div>
  )
};
export default Header;






