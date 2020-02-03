import React, { useGlobal } from 'reactn'
import styled from 'styled-components'
import settings from '../assets/img/settings.svg'



export default (props) => {
    const [mode] = useGlobal('mode')
    return (
        <Container>
            <TextStyle>
                {'<experience>'}
                <MediaStyle>
                    <VideoStyle>
                        <span>Proyecto 'Chat'.ReactNative</span>
                    </VideoStyle>
                    <VideoStyle>
                        <span>Proyecto 'WaceCab'.React</span>
                    </VideoStyle>
                    <VideoStyle>
                        <span>Proyecto 'WaceCab'.React</span>
                    </VideoStyle>
                    <VideoStyle>
                        <span>Proyecto 'WaceCab'.React</span>
                    </VideoStyle>
                </MediaStyle>
                {' </experience>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
align-items:center;
width:100%;
max-width:90%;
margin-top:30px;
margin-bottom:30px;
`

const TextStyle = styled.div`
padding:20px;
color:#A074BA;
div{
    margin-bottom:15px;
    margin-top:15px;
    color:rgb(50,50,50);
}
`
const MediaStyle = styled.div`
display:flex;
flex-wrap:${(props) => props.mode ? 'nowrap' : 'wrap'};
width:100%; 
`
const VideoStyle = styled.div`
border:1px solid green;
width:200px; 
height: 400px;
margin:0 30px;
`