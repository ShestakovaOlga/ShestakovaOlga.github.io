import React from 'react'
import styled from 'styled-components'
import Main from './src/Main'


export default () => {
    return (
        <ContainerStyle>
            <Main />
        </ContainerStyle>
    )
}
// HSL(8, 30%, 85%)
const ContainerStyle = styled.div`
/* background-color:#F8E0DE; */
background-color:#F3DEDC;
width:100vw;
min-height:100vh;
font-size:1rem;
`