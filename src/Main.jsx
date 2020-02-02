import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import girlNote from '../assets/img/girlNote.svg'
import About from './About'
import Experience from './Experience'
import Training from './Training'
import Form from './Form'

const role = 'Junior Front-End Developer'
const firstRole = 'Especialista en Turismo 🤔'
export default () => {
    const [textToWrite, setTextToWrite] = useState(firstRole)
    const [text, setText] = useState('')
    const [cursor, setCursor] = useState(false)
    const [forward, setForward] = useState(true)

    useEffect(() => {
        if ((forward && textToWrite[text.length]) || (!forward && text.length > 0)) {
            setTimeout(() => {
                console.log('text', text.length);
                if (forward) {
                    setText(text + textToWrite[text.length])
                } else {
                    setText(text.substring(0, text.length - 1))
                }
            }, 30)
        } else {
            setTimeout(() => {
                console.log('forward false');
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
                <PresentStyle>
                    <span>Olga Shestakova</span>
                    <div>
                        {text}<span style={{
                            opacity: cursor ? 0 : 1
                        }}>|</span>
                    </div>
                </PresentStyle>
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
min-height:100%;
`
const HeaderStyle = styled.div`
display:flex;
justify-content: center;
width:100%;
height:350px;
`
const PresentStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:2rem;
span{
    font-size:2.5rem;
    font-weight:bold;
}
`

const Logo = styled.img`
width:50%;
opacity:0.2;
margin-right:50px;
`