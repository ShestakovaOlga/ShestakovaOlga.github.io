import React, { useGlobal } from 'reactn'
import styled from 'styled-components'
import Main from './src/Main'
import 'antd/dist/antd.css';
import { StaticKitProvider } from '@statickit/react';



export default (props) => {
    const [mode] = useGlobal('mode')
    return (
        <StaticKitProvider site="b3e0eeedcb1f">
            <ContainerStyle mode={mode}>
                <Main />
            </ContainerStyle>
        </StaticKitProvider>

    )
}
// HSL(8, 30%, 85%)
const ContainerStyle = styled.div`
/* background-color:#F8E0DE; */
background-color:#F3DEDC;
width:100vw;
min-height:100vh;
font-size:${(props) => props.mode === 'phone' ? '1rem' : '1.3rem'}
`