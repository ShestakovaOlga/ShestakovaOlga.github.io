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
                {'<contact>'}
                <div>
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
                </div>
                {' </contact>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
max-width:90%;
`

const TextStyle = styled.div`
display:flex;
flex-direction:column;
margin-bottom:30px;
color:#A074BA;
div{
    margin-bottom:15px;
    margin-top:15px;
    color:rgb(50,50,50);
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
background-color:#F3DEDC;
font-size:1rem;

`

const TextAreaStyle = styled.textarea`
padding:15px;
background-color:#F3DEDC;
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