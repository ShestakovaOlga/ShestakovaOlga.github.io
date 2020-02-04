import React, { useGlobal, useState } from 'reactn'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import w1 from '../assets/img/w1.jpg'
import w2 from '../assets/img/w2.jpg'
import w3 from '../assets/img/w3.jpg'
import w4 from '../assets/img/w4.jpg'
import w5 from '../assets/img/w5.jpg'
import c1 from '../assets/img/c1.jpg'
import c2 from '../assets/img/c2.jpg'
import c3 from '../assets/img/c3.jpg'
import c4 from '../assets/img/c4.jpg'
import c5 from '../assets/img/c5.jpg'





export default (props) => {
    const [mode] = useGlobal('mode')
    const [car1, setCar1] = useState(0)
    const [car2, setCar2] = useState(0)
    return (
        <Container>
            <TextStyle>
                {'<experience>'}
                <MediaStyle mode={mode}>
                    <CarouselStyle width='100%' selectedItem={car1} onChange={setCar1} autoPlay showThumbs={false} showStatus={false} infiniteLoop>
                        <img src={w1} />
                        <img src={w2} />
                        <img src={w3} />
                        <img src={w4} />
                        <img src={w5} />
                    </CarouselStyle>
                    <DescriptionStyle mode={mode}>
                        Desarrollo del frontEnd de una app web para WakeCab.
                        Es una empresa que se dedica a gestionar viviendas y transporte.
                        Las tecnologias usadas: React, JS, HTML, CSS, Control de versiones con Git,Node.js, AntD, Axios.
                    </DescriptionStyle>
                </MediaStyle>
                {mode === 'phone' ? <Line></Line> : null}
                <MediaStyle mode={mode}>
                    <DescriptionStyle mode={mode}>
                        Proyecto propio en construcción. Todavía esta en Demo Versión. Es una plataforma para empresas que inclue un chat,
                        registro de horarios, información sobre empleado y calendario con eventos.
                        La idea de esta app es recebir datos del equipo y al mismo tiempo respetar su privacidad y su horario laboral
                        ya que para registrarse solo hace falta el correo electronico, contraseña y invitación de empresa.
                        Además se puede elegir entre recebir mensajes fura de horario laboral o no.
                         Las tecnologias usadas: React Native, Expo, Styled Components, Control de versiones con Git, WebSockets.
                    </DescriptionStyle>
                    <CarouselStyle selectedItem={car2} onChange={setCar2} autoPlay showThumbs={false} showStatus={false} infiniteLoop>
                        <img src={c1} />
                        <img src={c2} />
                        <img src={c3} />
                        <img src={c4} />
                        <img src={c5} />
                    </CarouselStyle>
                </MediaStyle>
                {' </experience>'}
            </TextStyle>
        </Container >

    )
}

const Container = styled.div`
display:flex;
align-items:center;
width:100%;
max-width:90%;
margin-top:30px;
margin-bottom:50px;
`

const TextStyle = styled.div`
padding:20px;
color:#A074BA;
div{
    margin-bottom:15px;
    margin-top:15px;
    color:rgb(50,50,50);
}
`
const CarouselStyle = styled(Carousel)`
    width:100%;
    .carousel {
        max-height: 500px;
        max-width: 50vw;
    }
    .carousel .slide {
        background: none;
    }
    .carousel .slide img {
        max-height: 500px;
        max-width: 100%;
        width: auto;
    }
`

const MediaStyle = styled.div`
display:flex;
flex-direction:${(props) => props.mode === 'phone' ? 'column' : 'row'};;
align-items:center;
width:100%; 
`
const DescriptionStyle = styled.div`
padding:15px;
text-indent: 30px;
width:${(props) => props.mode === 'phone' ? '100%' : '70%'};

`
const Line = styled.div`
width:100%;
height:1px;
background-color:#A074BA;
`