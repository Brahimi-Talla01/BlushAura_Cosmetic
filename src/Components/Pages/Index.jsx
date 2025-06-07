import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Data
import Products from './../../Product.json';
import ProductSwiper from './Component/ProductSwiper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Banners
import subBanner1 from './../../assets/banner-1.webp';
import subBanner2 from './../../assets/banner-2.webp';

// Services
import serviceImg1 from './../../assets/service-icon-1.svg';
import serviceImg2 from './../../assets/service-icon-2.svg';
import serviceImg3 from './../../assets/service-icon-3.svg';
import serviceImg4 from './../../assets/service-icon-4.svg';

// Brands
import brand1 from './../../assets/brand-1.png';
import brand2 from './../../assets/brand-2.png';
import brand3 from './../../assets/brand-3.png';

// Female Banner
import femalebanner from './../../assets/banner-female.webp';

// Discover
import discover1 from './../../assets/discover-1.webp';
import discover2 from './../../assets/discover-2.webp';

// Social Media
import socialImage1 from './../../assets/social-image-1.jpg';
import socialImage2 from './../../assets/social-image-2.jpg';
import socialImage3 from './../../assets/social-image-3.jpg';
import socialImage4 from './../../assets/social-image-4.jpg';
import socialImage5 from './../../assets/social-image-5.jpg';


const Index = () => {

    // Add to Wishlist
    const addToWishlist = (product) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.ProductName} added to Your wishlist`);
        }
        else{
            toast.info(`${product.ProductName} is already in your wishlist`);
        }
    }
    
    // Add to Cart
    const addToCart = (product) => {
        const existing = JSON.parse(localStorage.getItem('cart')) || [];
        const alreadyInCart = existing.find(p => p.id === product.id);
        
        if (!alreadyInCart) {
            const updatedProduct = {...product, quantity: 1};
            const updatedCart = [...existing, updatedProduct];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.ProductName} added to Your Cart!`);
        }
        else{
            toast.info(`${product.ProductName} is already in your Cart!`);
        }
    }

  return (
    <>
        {/* Hero */}
        <div className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Autoplay, EffectFade]}
                effect='fade'
                loop={true}
                autoplay={{
                    delay: 3000
                }}
            >
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap1">
                        <div className="hero-content">
                            <h5>- ESSENSTIAL ITEMS -</h5>
                            <h1>Get The Perfectly Hydrated Skin</h1>
                            <p className="mv-3">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap2">
                        <div className="hero-content">
                            <h5>- NEW COLLECTION</h5>
                            <h1>Beauty Inspired <br /> by Real Life</h1>
                            <p className="mv-3">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-wrap hero-wrap3">
                        <div className="hero-content">
                            <h5>- GET THE GLOW -</h5>
                            <h1>Be Your Kind <br /> of Beauty</h1>
                            <p className="mv-3">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <a href="#" className='btn hero-btn mt-3'>Shop Now</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        {/* Products */}
        <div className="product-container py-5 my-5">
            <div className="container position-relative">
                <div className="row">
                    <div className="section-title mb-5 product-title text-center">
                        <h2 className='fw-semibold fs-1'>Our Featured Products</h2>
                        <p className='text-muted'>Get the skin you want to feel</p>
                    </div>
                </div>

                {/* Product Swiper component */}
                <ProductSwiper 
                    Products={Products}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist} 
                />

            </div>

            {/* Barrer */}
            <div className="banners py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 banner-card overflow-hidden position-relative">
                            <img src={subBanner1} alt="" className="img-fluid rounded banner-img" />
                            <div className="banner-content position-absolute">
                                <h3>New COLLECTION</h3>
                                <h1>Intensive Glow C+ <br /> Serum <br /> </h1>
                                <button className="btn banner-btn mt-2">EXPLORE MORE</button>
                            </div>
                        </div>

                        <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
                            <img src={subBanner2} alt="" className="img-fluid rounded banner-img" />
                            <div className="banner-content banner-content2 position-absolute">
                                <h3>25% off Everything</h3>
                                <p>Makeup with extended range in <br /> colors for every human.</p>
                                <button className="btn banner-btn mt-2">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Service */}
            <div className="container py-5 mty-5">
                <div className="row text-center">
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <img src={serviceImg1} alt="" className='img-fluid' />
                        <h4 className='mt-3 mb-1'>Free Shipping</h4>
                        <p className="text-muted fs-6 fw-semibold">Free Shipping for orders over $130</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <img src={serviceImg2} alt="" className='img-fluid' />
                        <h4 className='mt-3 mb-1'>Returns</h4>
                        <p className="text-muted fs-6 fw-semibold">Within 30 days for an exchange.</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <img src={serviceImg3} alt="" className='img-fluid' />
                        <h4 className='mt-3 mb-1'>Online Support</h4>
                        <p className="text-muted fs-6 fw-semibold">24 hours a day, 7 days a week</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <img src={serviceImg4} alt="" className='img-fluid' />
                        <h4 className='mt-3 mb-1'>Flexible Payment</h4>
                        <p className="text-muted fs-6 fw-semibold">Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div>


            {/* Seen in */}
            <div className="text-center my-5 seen-in">
                <div className="container">
                    <h1 className="mb-5 fw-semibold">As seen in</h1>
                    <div className="row pt-3 justify-content-center">
                        <div className="col-md-4 mb-4 seen-card">
                            <img src={brand1} alt="" className='img-fluid' />
                            <p className='text-dark fs-5 mt-2 fw-semibold'>"Also the customer service is phenomenal. I would purchase again."</p>
                        </div>
                        <div className="col-md-4 mb-4 seen-card">
                            <img src={brand2} alt="" className='img-fluid' />
                            <p className='text-dark fs-5 mt-2 fw-semibold'>"Great product line. Very attentive staff to deal with."</p>
                        </div>
                        <div className="col-md-4 mb-4 seen-card">
                            <img src={brand3} alt="" className='img-fluid' />
                            <p className='text-dark fs-5 mt-2 fw-semibold'>"Are you looking to your beauty at an affordable price? Look no further."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* favourite beauty */}
        <div className="favourite-beauty py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="section-title mb-5 favourite-beauty-title text-center">
                        <h2 className='fw-semibold fs-1'>Cutomer favorite beauty essentials</h2>
                        <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="favourite-beauty-banner mb-lg-0 mb-5 position-relative">
                            <img src={femalebanner} className='img-fluid' alt="" />
                            <div className="favourite-beauty-banner-title">
                                <h3 className="fs-2">Empower Yourself</h3>
                                <p className="fs-6">Get the skin you want to feel</p>
                                <button className='btn btn-default'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            {Products.filter(product => product.id >= 10 && product.id <= 15).map(product => (
                                <div key={product.id} className="col-md-4 mb-0">
                                    <div key={product.id}>
                                        <div className="product-item mb-5 text-center position-relative">
                                            <div className="product-image w-100 position-relative overflow-hidden">
                                                <img src={product.image} className="img-fluid" alt={product.ProductName} />
                                                <img src={product.secondimage} className="img-fluid" alt={product.ProductName} />
                                                <div className="product-icons gap-3">
                                                    <div className="product-icon" title='Add to Whishlst' onClick={() => addToWishlist(product)}>
                                                        <i className="bi bi-heart fs-5"></i>
                                                    </div>
                                                    <div className="product-icon" title='Add to Cart' onClick={() => addToCart(product)}>
                                                        <i className="bi bi-cart3 fs-5"></i>
                                                    </div>
                                                </div>
                                                <span className={`tag badge text-white ${product.tag === 'New' ? 'bg-danger' : 'bg-success'}`}>
                                                    {product.tag}
                                                </span>
                                            </div>
                                            <Link to={`/product/${product.id}`} className='text-decoration-none text-black'>
                                                <div className="product-content pt-3">
                                                    <span className='price text-decoration-none'>{product.price}</span>
                                                    <h3 className="title pt-1">{product.ProductName}</h3>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Discover */}
        <div className="discover container py-5">
            <div className="section-title mb-5 favorite-beauty-title text-center">
                <h2 className="fw-semibold fs-1">More to Discover</h2>
                <p className="text-center">Our bundles were designed to conveniently package <br /> your tanning essentials while saving you money</p>
            </div>
            <div className="row g-5">
                <div className="col-md-6 discover-card text-center">
                    <div className="discover-img section-image rounded">
                        <img src={discover1} alt="Summer Collection" className="img-fluid rounded" />
                    </div>
                    <div className="discover-info mt-3">
                        <div>Summer Collection</div>
                        <button className='btn mt-2'>Shop Now <i className="bi bi-arrow-right ms-2"></i></button>
                    </div>
                </div>
                <div className="col-md-6 discover-card text-center">
                    <div className="discover-img section-image rounded">
                        <img src={discover2} alt="From Our Blog" className="img-fluid rounded" />
                    </div>
                    <div className="discover-info mt-3">
                        <div>Summer Collection</div>
                        <button className='btn mt-2'>Read More <i className="bi bi-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Socila Image */}
        <div className="social-image-container py-5 px-5 mx-auto">
            <div className="row g-4">
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage1} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage2} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage3} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage4} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage5} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="social-wrapper position-relative overflow-hidden">
                        <img src={socialImage1} alt="Social Image" className="img-fluid" />
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
        </div>


        <ToastContainer 
            position="top-right"
            autoClose ={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
  )
}

export default Index;
