import React from 'react'
import styled from 'styled-components'
import girlNote from '../assets/img/girlNote.svg'
import CV from '../assets/CV.pdf'



export default () => {
    return (
        <Container>
            <TextStyle>
                {'<about>'}
                <div>
                    Hola, soy Olga y soy programadora. Pero no siempre fue así.
                    Estudié Turismo en la Universidad de Rusia y me gustó
                    hasta que empecé a trabajar. Pronto entendí que el trabajo no se adaptaba a mi estilo de vida,
                     no cumplia mis expectativas.
                    Me resistía bastante al cambio laboral pero ahora puedo decir que soy programadora front-end
                    con ganas de seguir creciendo a nivel profesional.
                    Me considero una persona responsable, pro-activa, capaz de trabajar en equipo
                    y me adapto con facilidad a nuevos entornos de trabajo.
                 </div>
                <a href={CV} target="_blank">Aquí puedes descargar mi CV</a>

                {' </about>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
align-items:center;
height:400px;
width:100%;
max-width:90%;
margin-top:30px;
margin-bottom:30px;
`
const TextStyle = styled.div`
display:flex;
flex-direction:column;
padding:20px;
color:#A074BA;
div{
    margin-bottom:15px;
    margin-top:15px;
    color:rgb(50,50,50);
    text-indent: 50px;
}
a{
    margin-bottom:15px;
    text-decoration:none;
    cursor: pointer;

}
`