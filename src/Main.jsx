import React from 'react'
import styled from 'styled-components'
import girlNote from '../assets/img/girlNote.svg'
import About from './About'


export default () => {
    return (
        <Container>
            <HeaderStyle>
                <Logo src={girlNote} />
                <PresentStyle>
                    <span>Olga Shestakova</span>
                    Junior Front-End Developer
                </PresentStyle>
            </HeaderStyle>
            <About />




            <div>
                Aqui va a ir texto sobre mi
            </div>
            <div>
                Aqui va a ir texto sobre lo que uso
            </div>
            <div>
                Aqui va a ir texto sobre mis proyectos
            </div>
            <div>
                Aqui va a ir las urls de las redes cos
            </div>
            <div>
                Aqui va a ir un formulario
            </div>
        </Container>

    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
min-height:100%;
`
const HeaderStyle = styled.div`
display:flex;
width:100%;
`
const PresentStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:1.2rem;
width:50%;
span{
    font-size:1.5rem;
    font-weight:bold;
}
`

const Logo = styled.img`
width:50%;
opacity:0.2;
margin-right:50px;
`