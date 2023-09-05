import React from 'react'
import { Accordion, Nav } from 'react-bootstrap';
import { NavbarSmall } from '../components/NavbarSmall';
import { ParaLlevar } from '../components/ParaLlevar';


export default function HomePage() {

    return (
        <div className="footer-fix">
            <NavbarSmall/>
            <div className='mt-2 d-flex flex-column align-items-center justify-content-center gap-2 '>
                <Nav.Link  href="/menuEs">
                    <button className="boton-artesanal-cel px-4" >VER MENÚ</button>
                </Nav.Link>
                <Nav.Link href="/menuIn">
                    <button className="boton-artesanal-cel px-4" >SEE MENU</button>
                </Nav.Link>
            </div>
            <div className='m-2 d-flex align-items-center justify-content-center text-center titulo-conoce'>
                Despliega para conocer más opciones y disfrutar en casa!
            </div>
            <Accordion>
                <Accordion.Item className="tarjetas text-center" eventKey="0">
                    <Accordion.Header className='buton-llevar' >
                        Alfajores para llevar
                    </Accordion.Header>
                    <Accordion.Body>
                        <ParaLlevar/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}