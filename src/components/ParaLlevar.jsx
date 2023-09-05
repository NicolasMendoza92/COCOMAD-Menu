import React from 'react'
import { Card } from 'react-bootstrap'

export const ParaLlevar = () => {

    const cardsHome = {
        image1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637520795/cocoMAD/IMG_3185_mfmu6m.jpg",
        image2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1643223221/cocoMAD/box%20armados/box_familiar2_at9jjc.png",
        image3: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637682094/cocoMAD/_MG_5488_fnwcaa.png",
        image4: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1659110196/cocoMAD/Premiums/conito_tradicional_2_xmseim.jpg",
        image5:"https://res.cloudinary.com/dcx1rcwvu/image/upload/v1677600630/cocoMAD/maicena_o5aljq.jpg"
    }

    return (

        <div className="m-auto row  d-flex flex-column justify-content-between">
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image1} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">CLASICOS</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 1.40€ <br /> Caja x 6... 8.00€ <br /> Caja x 12... 15.50€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image2} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">PREMIUM</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 1.70€ <br /> Caja x 6... 9.80€ <br /> Caja x 12... 19.50€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image3} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">CAJA MIX</Card.Title>
                        <Card.Text className="oracion-card">
                        Caja x 6 (3 y 3)... 9.00€ <br /> Caja x 12 (6 y 6)... 17.70€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image5} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">MAICENA</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 1.50€ <br /> Caja x 6... 8.50€ <br /> Caja x 12... 16.50€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-none text-white mb-2 card-home">
                <Card.Img src={cardsHome.image4} alt="Card image" />
                <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                    <div className="glass-card">
                        <Card.Title className="titulo-card-home">CONITOS</Card.Title>
                        <Card.Text className="oracion-card">
                            Unidad... 2.00€ <br /> Caja x 6... 11.50€ <br /> Caja x 12... 22.00€
                        </Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <div>
                Nota: El sabor del baño de chocolate (blanco o de leche) es sujeto a stock!
            </div>
        </div>

    )
}