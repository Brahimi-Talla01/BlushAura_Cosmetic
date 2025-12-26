import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {

    // États pour stocker le nombre d'articles dans le panier et dans la wishlist
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setwishlistCount] = useState(0);

    // Fonction pour mettre à jour les compteurs à partir du localStorage
    const updateCounts = () => {

        // Récupération du panier et de la wishlist depuis le localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

         // Calcul du nombre total d'articles dans le panier (en tenant compte de la quantité)
        const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

         // Mise à jour des compteurs
        setCartCount(totalCartItems);
        setwishlistCount(wishlist.length);
    };

    useEffect(() => {

         // Initialisation des compteurs au montage du composant
        updateCounts();

        // Fonctions pour réagir aux événements personnalisés
        const handleCartUpdate = () => updateCounts();
        const handleWishlistUpdated = () => updateCounts();

        // Écoute des événements personnalisés envoyés depuis d'autres composants
        window.addEventListener('cartUpdated', handleCartUpdate);
        window.addEventListener('wishlistUpdated', handleWishlistUpdated);

        // Écoute des changements dans le localStorage (utile si plusieurs onglets sont ouverts)
        const onStorageChange = (e) => {
            if (e.key === 'cart' || e.key === 'wishlist') {
                updateCounts();
            }
        };
        window.addEventListener('storage', onStorageChange);

        // Nettoyage des écouteurs d’événements lors du démontage du composant
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
            window.removeEventListener('wishlistUpdated', handleWishlistUpdated);
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);


  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-3">
            <div className="container nav">
                {/* Toggle Button */}
                <button 
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded="false"
                    aria-label='Toggle navigation'
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Mobile Logo */}
                {/* <Link to='/' className='navbar-brand mx-auto order-0 f-lg-none d-flex'>
                    <h2 className="m-0 fw-bold" style={{letterSpacing: "2px"}}>
                        BLUSHIFY
                    </h2>
                </Link> */}

                {/* Mobile Icon */}
                <ul className="d-lg-none d-flex align-items-center gap-3">
                    <li className="nav-item">
                        <a href="#" >
                            <i className="bi bi-search fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" data-bs-toggle='modal' data-bs-target='#signupModal'>
                            <i className="bi bi-person fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <Link to='/wishlist' >
                            <i className="bi bi-heart fs-5 text-dark"></i>
                            <span className='position-absolute top-0 start-100 translate-middle cart-qount rounded-pill'>
                                {wishlistCount}
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item position-relative">
                        <Link to='/cart'>
                            <i className="bi bi-bag fs-5 text-dark"></i>
                            <span className='position-absolute top-0 start-100 translate-middle cart-qount rounded-pill'>
                                {cartCount}
                            </span>
                        </Link>
                    </li>

                </ul>

                {/* Main Navbar */}
                <div className="collapse navbar-collapse justify-content-between" id='navbarNav'>
                    {/* Left Nav Link */}
                    <ul className="navbar-nav nav-menu align-items-center gap-4" >
                        <li>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                        <li>
                            <Link to='/shop' className='nav-link'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/stores' className='nav-link'>Store</Link>
                        </li>
                        <li>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>

                    {/* Center Logo */}
                    <Link to='/' className='navbar-brand order-0 d-none d-lg-flex'>
                        <h2 className='m-0 fw-bold' style={{letterSpacing: '2px'}}>BLUSHAURA</h2>
                    </Link>

                    {/* Right Icons */}
                    <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
                        <li className="nav-item">
                            <a href="#">
                                <i className="bi bi-search fs-5 text-dark"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#signupModal'>
                                <i className="bi bi-person fs-5 text-dark"></i>
                            </a>
                        </li>
                        <li className="nav-item position-relative">
                            <Link to='/wishlist'>
                                <i className="bi bi-heart fs-5 text-dark"></i>
                                <span className='position-absolute top-0 start-100 translate-middle cart-qount rounded-pill'>
                                    {wishlistCount}
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item position-relative">
                            < Link to='/cart'>
                                <i className="bi bi-bag fs-5 text-dark"></i>
                                <span className='position-absolute top-0 start-100 translate-middle cart-qount rounded-pill'>
                                    {cartCount}
                                </span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
      </nav>

      {/* Sign-up Modal */}
      <div className="modal fade" id='signupModal' tabIndex='-1' aria-labelledby='signupModalLabel' aria-hidden='true'>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-title fw-bold" id='signupModalLabel'> Sign Up</h5>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className='form-label'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter Your Name' required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Email Address</label>
                            <input type="email" className='form-control' placeholder='Enter Email Address' required />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Password</label>
                            <input type="password" className='form-control' placeholder='Enter Password' required />
                        </div>
                        <p className="text-muted">
                            By signing up, you agree to our <a href="#" className='text-success text-decoration-none'>Terms</a>
                            & <a href="#" className='text-success text-decoration-none'>Privacy Policy</a>
                        </p>
                        <button type='button' className='btn btn-dark w-100'>Sign Up</button>
                    </form>
                    <div className="text-content mt-3">
                        <p>Already have an account? <a href="#" className='text-success fw-bold'>Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
