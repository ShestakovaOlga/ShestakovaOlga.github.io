import React, { useState, useEffect, useGlobal } from 'reactn'
import styled from 'styled-components'
import girlNote from '../assets/img/girlNote.svg'
import About from './About'
import Experience from './Experience'
import Training from './Training'
import Form from './Form'

const role = 'Junior Front-End Developer'
const firstRole = 'Especialista en Turismo 🤔'

export default (props) => {
    const [textToWrite, setTextToWrite] = useState(firstRole)
    const [text, setText] = useState('')
    const [cursor, setCursor] = useState(false)
    const [forward, setForward] = useState(true)
    const [mode] = useGlobal('mode')

    useEffect(() => {
        if ((forward && textToWrite[text.length]) || (!forward && text.length > 0)) {
            setTimeout(() => {
                if (forward) {
                    setText(text + textToWrite[text.length])
                } else {
                    setText(text.substring(0, text.length - 1))
                }
            }, 30)
        } else {
            setTimeout(() => {
                if (forward && textToWrite !== role) {
                    setForward(false)
                } else {
                    setTextToWrite(role)
                    setForward(true)
                }
            }, 1000)
        }
    }, [text, forward])

    useEffect(() => {
        setTimeout(() => {
            setCursor(!cursor)
        }, 500)
    }, [cursor])

    return (
        <Container>
            <HeaderStyle>
                {/* <Logo src={girlNote} /> */}
                <PresentStyle mode={mode}>
                    <span>Olga Shestakova</span>
                    <div>
                        {text}<span style={{
                            opacity: cursor ? 0 : 1
                        }}>|</span>
                    </div>
                </PresentStyle>
                <Logo src={girlNote} mode={mode} />
            </HeaderStyle>
            <About />
            <Training />
            <Experience />
            <Form />
        </Container>

    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100vw;
min-height:100vh;
`
const HeaderStyle = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
width:100%;
height:100vh;
margin-bottom:30px;
`
const PresentStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:${(props) => (props.mode === 'phone' && 'tablet') ? '1.3rem' : '3rem'};
    color:rgb(50,50,50);
    padding:15px;
    span{
        font-size:${(props) => (props.mode === 'phone' && 'tablet') ? '1.8rem' : '3.5rem'};
    }
`

const Logo = styled.img`
width:100%;
height:50%;
opacity:0.2;
margin-top:${(props) => props.mode === 'phone' ? '0px' : '200px'};
`