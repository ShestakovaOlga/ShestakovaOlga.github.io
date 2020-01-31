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

const ContainerStyle = styled.div`
background-color:HSL(8, 30%, 85%);
width:100vw;
min-height:100vh;
`