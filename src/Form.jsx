import React, { useState } from 'react'
import styled from 'styled-components'
import settings from '../assets/img/settings.svg'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useStaticKit, ValidationError } from '@statickit/react';
import { sendContactEmail } from '@statickit/functions';



export default (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const client = useStaticKit();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        setIsSubmitting(true);
        let resp = await sendContactEmail(client, {
            subject: `${email} submitted the contact form`,
            replyTo: email,
            fields: { name, message }
        });

        switch (resp.status) {
            case 'ok':
                setIsSubmitted(true);
                setName('')
                setEmail('')
                setMessage('')
                break;

            case 'argumentError':
                setErrors(resp.errors);
                setIsSubmitting(false);
                break;

            default:
                setIsSubmitting(false);
                break;
        }
    }

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
                    <FormStyle onSubmit={handleSubmit}>
                        <span>o dejar tu mensaje aquí</span>
                        <InputStyle id="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='Nombre' />
                        <InputStyle id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Email' />
                        <ValidationError
                            prefix="Email"
                            field="replyTo"
                            errors={errors}
                        />
                        <TextAreaStyle id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder='Mensaje' />
                        {isSubmitted ? '¡Gracias por contactar conmigo!' : null}
                        <Button type="submit" disabled={isSubmitting}>
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
height:100vh;
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
const FormStyle = styled.form`
display:flex;
flex-direction:column;
span{
    margin-top:15px;
}
`

const InputStyle = styled.input`
padding:5px;
border:none;
outline:none;
border-bottom:1px solid black;
background-color:#F3DEDC;
font-size:1rem;

`

const TextAreaStyle = styled.textarea`
padding:5px;
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
border:none;
`