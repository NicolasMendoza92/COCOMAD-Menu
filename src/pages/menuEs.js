import Link from 'next/link';
import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';


const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default function MenuEs() {
    return (
        <div className='footer-fix'>
             <div className="d-flex justify-content-end nav-bar">
                <Link href="/">
                    <button className="back-arrow"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857664/cocoMAD/Menu/Parte_1_header_menu_pwnebx.png" alt="" className="header-menu"  />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857664/cocoMAD/Menu/parte_2_menu_iwrvvc.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857664/cocoMAD/Menu/parte_3_menu_m4m7xx.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857663/cocoMAD/Menu/parte_4_header_middle_menu_mb3cg3.png" alt="" className="header-menu"  />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857664/cocoMAD/Menu/parte_5_menu_zxq1bt.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693857664/cocoMAD/Menu/parte_6_menu_ssdfsf.png" alt="" className="header-menu" />
            </div>
            <div className="d-flex align-items-center justify-content-between bottom-footer">
                <button onClick={scrollToTop} className="volverArriba mx-1"> <FaArrowUp /> </button>
                <Link href="/">
                    <button className="back-arrow mx-1"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
        </div>
    )
}