import React, { useState } from 'react'
import styled from 'styled-components'
import settings from '../assets/img/settings.svg'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";



export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <Container>
            <TextStyle>
                {'<contact>'}<br />
                <br />
                <div>
                    <LinkStyled href='https://linkedin.com/in/olga-shestakova-61412b165' target="_blank"><FaLinkedinIn /></LinkStyled>
                    <LinkStyled href='https://github.com/ShestakovaOlga' target="_blank"><FaGithub /></LinkStyled>
                    <LinkStyled href='https://twitter.com/OlgaShestakov13' target="_blank"><FaTwitter /></LinkStyled>
                </div>
                <span>Tambien puedes escribírme por email: olgshestakova@gmail.com</span>
                <FormStyle>
                    <span>o deja tu mensaje aquí</span>
                    <InputStyle value={name} onChange={setName} placeholder='Nombre' />
                    <InputStyle value={email} onChange={setEmail} placeholder='Email' />
                    <TextAreaStyle value={message} onChange={setMessage} placeholder='Mensaje' />
                    <Button>
                        Enviar
                    </Button>
                </FormStyle>
                <br />{' </contact>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
margin:10px 0 30px 0;
`

const TextStyle = styled.div`
display:flex;
flex-direction:column;
margin-left: 20px;
font-size:1.3rem;
span{
    margin-top:30px;
}
`
const LinkStyled = styled.a`
 text-decoration:none;
 color:black;
 margin:15px 15px;
`
const FormStyle = styled.div`
display:flex;
flex-direction:column;
`

const InputStyle = styled.input`
padding:15px;
border:none;
outline:none;
border-bottom:1px solid black;
background-color:HSL(8, 30%, 85%);
font-size:1rem;

`

const TextAreaStyle = styled.textarea`
padding:15px;
background-color:HSL(8, 30%, 85%);
border:none;
border-bottom:1px solid black;
outline:none;
margin:20px 0;
font-size:1rem;
`

const Button = styled.button`
background-color:black;
color:white;
padding:15px;
border-radius:10px;
outline:none;
cursor: pointer;
font-size:1rem;
`