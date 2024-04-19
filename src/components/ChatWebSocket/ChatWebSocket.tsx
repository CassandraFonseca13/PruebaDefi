import React from "react";
import { useState, useEffect } from "react";

import {FiSend} from "react-icons/fi"

function ChatWebSocket(){
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes]= useState<String[]>([]);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(()=>{
        const newSocket = new WebSocket ('ws://localhost:8087'); 
        newSocket.onmessage=(event) => {
            event.data.text().then((text:string)=>{
                console.log.apply(text);
                setMensajes((prevMensajes) => [...prevMensajes,text]);
            });
        };
        newSocket.onclose=()=>{
            console.log('desconocido');
        };
        setSocket(newSocket);
        return()=>{
            newSocket.close();
        }
    },[]);
    const mandarMensaje = ()=>{
        if(socket && mensaje.trim()){
            setMensajes((anterioresM)=>[...anterioresM,mensaje]);
            socket.send(mensaje);
            setMensaje('');
        }
    };
    
    return(
        <div className="chat">
            <div className="chat-header">
                Titulo
            </div>
            {/* bucle que muestre mensajes */}
            <div className="chat-message">
                {mensajes.map((mensajeInterno,index)=>(
                    <div key={index}>{mensajeInterno}</div>
                ))}
                </div>
            <div className="chat-sender">
            <input className="chat-send"
                value={mensaje}
                onChange={(evento)=>{
                    setMensaje(evento.target.value)
                }}
                onKeyDown={(evento)=>{
                if(evento.key === 'Enter'){
                    mandarMensaje();
                }
            }}
                ></input>
                <FiSend/> 

            </div>
        </div>
    );
}
export default ChatWebSocket;