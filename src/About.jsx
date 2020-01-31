import React from 'react'
import styled from 'styled-components'



export default () => {
    return (
        <Container>
            <Code language='html'>{`
                <about>
                    Programadora front-end con ganas de seguir creciendo a nivel profesional.

                    Tecnologías aprendidas por ahora: React, React Native, HTML, CSS3, Javascript, SASS, ES6, Bootstrap.

                    Me considero una persona responsable, pro-activa, capaz de trabajar en equipo.
                    Me adapto con facilidad a nuevos entornos de trabajo.
                </about>
            `}</Code>
        </Container>

    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:350px;
`
