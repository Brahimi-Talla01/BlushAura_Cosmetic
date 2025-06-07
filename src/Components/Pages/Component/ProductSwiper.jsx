import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ProductSwiper = ({ Products, addToCart, addToWishlist }) => {
  const [fiterSortOption, setfiterSortOption] = useState('all');

  const navigate = useNavigate();

  // const addToWishlist = (product) => {
  //   const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
  //   if (!existing.some(p => p.id === product.id)) {
  //     const updated = [...existing, product];
  //     localStorage.setItem('wishlist', JSON.stringify(updated));
  //     window.dispatchEvent(new Event('wishlistUpdated'));
  //     toast.success(`${product.ProductName} added to Your wishlist`);
  //   }
  //   else{
  //     toast.info(`${product.ProductName} is already in your wishlist`);
  //   }
  // }

  // const addToCart = (product) => {
  //   const existing = JSON.parse(localStorage.getItem('cart')) || [];
  //   const alreadyInCart = existing.find(p => p.id === product.id);
    
  //   if (!alreadyInCart) {
  //     const updatedProduct = {...product, quantity: 1};
  //     const updatedCart = [...existing, updatedProduct];
  //     localStorage.setItem('cart', JSON.stringify(updatedCart));
  //     window.dispatchEvent(new Event('cartUpdated'));
  //     toast.success(`${product.ProductName} added to Your Cart!`);
  //   }
  //   else{
  //     toast.info(`${product.ProductName} is already in your Cart!`);
  //   }
  // }

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: ".product-swiper-next",
          prevEl: ".product-swiper-prev"
        }}
        breakpoints={{
          1399: { slidesPerView: 4 },
          1199: { slidesPerView: 3 },
          991: { slidesPerView: 2 },
          767: { slidesPerView: 1.5 },
          0: { slidesPerView: 1 }
        }}
        className="my-product-swiper"
      >
        {Products.filter(product => product.id >= 5 && product.id <= 10).map(product => (
          <SwiperSlide key={product.id}>
            <div className="product-item text-center position-relative">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 
      <button className="product-swiper-prev position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent padding-4 ">
        <i className="bi bi-chevron-left fs-4"></i>
      </button>
      <button className="product-swiper-next position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent padding-4 ">
        <i className="bi bi-chevron-right fs-4"></i>
      </button> */}
    </>
    
  );
};

export default ProductSwiper;