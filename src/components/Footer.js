import './footer.css'

const Footer = () => {
    return (
        <div className='allfooter'>
            <div className="container-fluid bg-light text-dark text-center  ">
                <div className="footer-head">
                    <div className="container">
                        <div className="content-footer d-flex float-start">
                            <div className="sc-aXZVg euEtGv display-6">For better experience,download the Swiggy app now</div>
                        </div>
                        <div className="img-footer float-end p-2">
                            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" rel="nofollow noopener" target="_blank" className="sc-ERObt eCrZEl">
                                <img className="sc-fqkvVR ecqJfI sc-dNsVcS eeLvby" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App" width="270px" height="80px" /></a>
                            <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" rel="nofollow noopener" target="_blank" className="sc-ERObt eCrZEl">
                                <img className="sc-fqkvVR ecqJfI sc-dNsVcS eeLvby" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App" width="270px" height="80px" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="https://png.pngtree.com/png-vector/20221219/ourmid/pngtree-free-delivery-car-icon-element-png-image_6529763.png" alt="Swiggy Logo" />
                    </div>
                    <div className="footer-links">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><img src="https://img.freepik.com/premium-vector/social-media-icon-illustration-facebook-facebook-icon-vector-illustration_561158-2134.jpg" alt="Facebook"  /></a>
                        <a href="#"><img src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media-thumbnail.png" alt="Twitter" /></a>
                        <a href="#"><img src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg" alt="Instagram" /></a>
                    </div>
                </div>
                <p className="footer-text">&copy; 2023 free delivery. All rights reserved.</p>
            </footer>




        </div>
    )
}
export default Footer;