import Link from "next/link";
import { FaArrowUp, FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { RiArrowGoBackFill } from 'react-icons/ri';

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className=" footer">
                <div className="row text-center justify-content-center links mx-3">
                    <div className="d-flex flex-column align-items-center col-12 col-md-3 my-2 p-2">
                        <p>Seguinos en Nuestras Redes</p>
                        <hr />
                        <div className="my-2">
                            <a href="https://wa.me/c/34635790277" target="blank"> <FaWhatsapp className="social-icon" /> </a>
                            <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank" ><FaFacebookSquare className="social-icon" /> </a>
                            <a href="https://www.instagram.com/cocomadbakery/" target="blank"> <FaInstagramSquare className="social-icon" /> </a>
                        </div>
                        <div className="subtitle-footer mb-2">
                            <p>Mira todos nuestros productos en nuestra web</p>
                            <a className="social-icon" target="blank" href="https://cocomadbakery.com/">COCOMAD BAKERY</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between bottom-footer">
                    <button onClick={scrollToTop} className="volverArriba mt-2 mx-1"> <FaArrowUp /> </button>
                    <Link href="/">
                        <button className="back-arrow mt-2 mx-1"> <RiArrowGoBackFill /> </button>
                    </Link>
                </div>
            </div>
        </>
    )
}