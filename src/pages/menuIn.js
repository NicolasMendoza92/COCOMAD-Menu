import Link from 'next/link';
import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default function menuIn() {
    return (
        <div className='footer-fix'>
             <div className="d-flex justify-content-end nav-bar">
                <Link href="/">
                    <button className="back-arrow"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858183/cocoMAD/Menu/Menu%20ingles/parte_1_header_menu_ingles_ken1uz.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858183/cocoMAD/Menu/Menu%20ingles/parte_2_menu_ingles_hlmiba.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858192/cocoMAD/Menu/Menu%20ingles/parte_3_menu_ingles_gbvsve.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858192/cocoMAD/Menu/Menu%20ingles/parte_4_menu_ingles_middle_header_f72u65.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858193/cocoMAD/Menu/Menu%20ingles/parte_5_menu_ingles_ichgw8.png" alt="" className="header-menu" />
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1693858193/cocoMAD/Menu/Menu%20ingles/parte_6_footer_menu_ingles_qiruab.png" alt="" className="header-menu" />
            </div>
            <div className="d-flex align-items-center justify-content-between botom-footer">
                <button onClick={scrollToTop} className="volverArriba mx-1"> <FaArrowUp /> </button>
                <Link href="/">
                    <button className="back-arrow mx-1"> <RiArrowGoBackFill /> </button>
                </Link>
            </div>
        </div>
    )
}