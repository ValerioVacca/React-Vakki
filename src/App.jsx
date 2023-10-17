
import './App.css'

function App() {


  return (
    <>
  {/* <!-- Inizio Navbar --> */}
    <nav className="navbar navbar-expand-lg  navbar-light sticky-top px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
            <h1 className="m-0 navtext">Vakki®</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">Chi siamo?</a>
                <a href="service.html" className="nav-item nav-link">Servizi</a>
                <a href="product.html" className="nav-item nav-link">Prodotti</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contatti</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="gallery.html" className="dropdown-item">Fotografi Mucche</a>
                        <a href="feature.html" className="dropdown-item">Collaborazioni</a>
                        <a href="team.html" className="dropdown-item">Vivi Bitonto</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            
                    </div>
                </div>
            </div>
            <div className="border-start ps-4 d-none d-lg-block">
                <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
            </div>
        </div>
    </nav>
    {/* <!-- Fine End --> */}

    {/* <!-- Inizio Header --> */}
    <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-8 text-start">
                                    <p className="fs-4 text-white">Il miglior latte in circolazione</p>
                                    <h1 className="display-1 text-white mb-5 animated slideInRight ms-5 ps-3">Da Vacca a Vakki®</h1>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Esplora ancora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-8 text-end">
                                    <p className="fs-4 text-white">Il miglior latte in circolazione</p>
                                    <h1 className="display-1 text-white mb-5 animated slideInRight me-5 pe-3">Da Vacca a Vakki®</h1>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Esplora ancora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    </div>
    {/* <!-- Fine Header --> */}

    {/* <!-- Inizio Dicono di Noi --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-end">
                <div className="col-lg-6">
                    <div className="row g-2">
                        <div className="col-6 position-relative">
                            <div className="about-experience bg-primary text-white rounded">
                                <h1 className="display-1 mb-0">25</h1>
                                <small className="fs-5 fw-bold">Anni di Esperienza</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/service-1.jpg"/>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/service-2.jpg"/>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/service-3.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <p className="section-title bg-white text-start text-primary pe-3">Dicono di Noi</p>
                    <h1 className="mb-4">Conosci come viene prodotto il nostro latte</h1>
                    <p className="mb-4">Nasciamo in una cittadina super onesta di nome Bitonto, dove le vacche vengono coccolate a suon di spari di pistola. Vogliamo solo il meglio per la nostra mandria bitontina.</p>
                    <div className="row g-5 pt-2 mb-5">
                        <div className="col-sm-6">
                            <img className="img-fluid mb-4" src="img/service.png" alt=""/>
                            <h5 className="mb-3">Servizi Dedicati</h5>
                            <span>Contatta lo spaccio più vicino per la tua fresca fornitura</span>
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid mb-4" src="img/product.png" alt=""/>
                            <h5 className="mb-3">Prodotti organici</h5>
                            <span>Il nostro latte è così fresco che anche quando lo riscaldi non si forma la patina</span>
                        </div>
                    </div>
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">Vuoi saperne di più?</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Fine Dicono di Noi --> */}

    {/* <!-- Inizio Footer --> */}
    <div className="container-fluid bg-dark footer mt-5 py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Contatti</h5>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Link di Navigazione</h5>
                    <a className="btn btn-link" href="">Dicono di noi</a>
                    <a className="btn btn-link" href="">Contattaci</a>
                    <a className="btn btn-link" href="">Servizi</a>
                    <a className="btn btn-link" href="">Termini & Condizioni</a>
                    <a className="btn btn-link" href="">Supporto</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Orari Apertura</h5>
                    <p className="mb-1">Lunedì - Venerdì</p>
                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                    <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Domenica</p>
                    <h6 className="text-light">Chiusi</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Newsletter</h5>
                    <p>Se vuoi essere sempre informato sulle novità</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Iscriviti</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Fine Footer --> */}

    </>
  )
}

export default App
