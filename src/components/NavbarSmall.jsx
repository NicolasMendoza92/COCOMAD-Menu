import Link from "next/link";
import { Container } from "react-bootstrap";

export const NavbarSmall = () => {

    return (
        <div className="header-style">
            <nav>
                <Container bg="none" className="py-2">
                    <div className="d-flex align-items-center justify-content-start contenedor-small " >
                        <div className="logo-container-small" >
                            <Link href="/"  >
                                <img id="main-img-small" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1647437646/cocoMAD/LOGO_CON_CIRCULO-02_1_ya2rd3.png" alt="img logo" className="nav-logo-desktop" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </nav>
        </div>
    );
}