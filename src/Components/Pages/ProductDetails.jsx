import React, { useEffect, useState } from 'react';

import Products from './../../Product.json';
import { Link, useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';


const ProductDetails = () => {

    const { id } = useParams();
    const product = Products.find((p) => p.id == id);
    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            setImages([product.image, product.secondimage].filter(Boolean));
            setQuantity(1);
        }
        console.log(product);
        

    }, [product]);

    const colors =['#000000', '#7B3F00', '#9BBEC8'];

    return (
        <div>
            <ol className="section-banner py-3 position-relative">
                <li className="position-relative"><Link to='/'>Home</Link></li>
                <li className="position-relative active"><a href="#" className='ps-5'>Beauty & Cosmetics</a></li>
                <li className="position-relative active"><a href="#" className='ps-5'> {product.ProductName} </a></li>
            </ol>

            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="d-flex flex-column-reverse flex-md-row mb-4">
                            <div className="d-flex flex-column me-3 thumbnail-images">
                                {images.map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image} 
                                        alt={`Thumb ${index}`} 
                                        onClick={() => setMainImage(image)}
                                        className={`img-thumbnail ${mainImage === image ? 'border-dark' : ''}`}
                                        style={{width:60, height:80, objectFit: 'cover', cursor: 'pointer'}}
                                    />
                                ))}
                            </div>
                            <img src={mainImage} className='img-fluid' alt="Image" />
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <h5 className="fw-bold"> {product.price} </h5>
                        <h2 className='mb-4 fw-semibold'> {product.ProductName} </h2>

                        <p className="mb-1 fw-semibold"> Color : Black </p>
                        <div className="d-flex gap-2 mb-4">
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: color,
                                        width: 25,
                                        height: 25,
                                        borderRadius: '50%',
                                        border: "1px solid #ccc",
                                        cursor: 'pointer'
                                    }}>
                                </div>
                            ))}
                        </div>
                        <p className="fw-semibold mb-1">Quantity</p>
                        <div className="d-flex align-items-center gap-3 mb-4 Quantity">
                            <div className="d-flex align-items-center Quantity-box" style={{maxWidth: '200px'}}>
                                <button className='btn-count border-0'
                                    onClick={() => setQuantity((quant) => Math.max(1, quant - 1))}
                                >
                                    -
                                </button>

                                <input 
                                    type="text" 
                                    className='form-control text-center mx-2'
                                    value={quantity}
                                    readOnly
                                />

                                <button className='btn-count border-0'
                                    onClick={() => setQuantity((quant) => Math.max(1, quant + 1))}
                                >
                                    +
                                </button>
                            </div>
                            <button className='btn-custome w-100 '>Add to cart</button>
                        </div>
                        <button className='btn-custome2 w-100 border-0'>Buy it now</button>

                        <hr />
                        <p><strong>Vendor:</strong> Vendor 4</p>
                        <p><strong>Collections:</strong> Beauty & Cosmetics, Bestseller, Featured, New Arrival, Skincare, under $40</p>
                        <p><strong>SKU:</strong> 501</p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <ul className="nav nav-tabs border-0 justify-content-center mb-4" id="productTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button 
                            className="nav-link active border-0 fw-bold fs-4 text-capitalize"
                            id="description-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            type="button"
                        >
                            Description
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className="nav-link border-0 fw-bold fs-4 text-capitalize"
                            id="shipping-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#shipping"
                            type="button"
                        >
                            Shipping and Return
                        </button>
                    </li>
                </ul>

                <div className="tab-content" id="productTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <p><strong>For Normal, oily, Combination Skin Types</strong></p>
                        <p>Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients...</p>
                        <h5 className="mt-4">Benefits</h5>
                        <ul className="Benefits-list p-0">
                            <li className="position-relative">Buildable medium-to-full coverage</li>
                            <li className="position-relative">Weightless, airy feel - no caking!</li>
                            <li className="position-relative">Long-wearing</li>
                            <li className="position-relative">Evens skin tone</li>
                            <li className="position-relative">Available in 07 shades (all exclusive to Makeaholic!)</li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                        <p>We typically process and ship orders within 1 week, with shipping costs calculated at checkout based on your location and selected method. Free shipping is available for orders over $50, depending on the promotion. Once your order ships, you will receive a confirmation email with a tracking number to monitor your package. Standard shipping usually takes 5-7 business days while express options are available for faster delivery. If you need to change your shipping after placing an order, please contact us as soon as possible. In case of lost or stolen packages, we recommend reaching out to the carrier first but our support team is happy to assist. For returns, we accept items within 1 week, provided they are unused and in their original packaging. Refunds are processed within 3-5 business days after we receive and inspect the returned item. Exchanges are also available if you need a different size.</p>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default ProductDetails;
