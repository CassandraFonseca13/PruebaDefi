import React from "react";
import { useState } from "react";//
import './CustomButton.css';
//tsx exclusivo
interface Valores{
    texto:string,
    posicion:number
}
let movimientos: number [] = []; //movimientos de 
let tableroData: string [] = ['','','','','','','','',''];
//let movimientos = []; JS
//let tableroData = ['','',...,'']; JS
    // consrvar el estado

function CustomButton({texto, posicion}:Valores){
    const [contador, setContador]=
                            useState(0);
    const sumar = () =>{
        setContador(variable=>{
            return variable+1;
        });
    };
    const[estadoGato, setEstadoGato] = useState('-');
    // const funciones =(n)=>{}JS
    const funciones = (n:number)=>{
        cambiarEstado(n);
        agregarMovimiento(n);
    };
    const agregarMovimiento = (n:number)=>{ 
        movimientos.push(n);
            console.log(movimientos);
        };
    
    // [1,2,3,4,5,6,7]
    const cambiarEstado = (posicion:number)=>{
                setEstadoGato(estado=>{
                    const nuevoEstado=
                    estado === '-'? 'X':
                    estado === 'X'? 'O': '-';
                    tableroData[posicion] = nuevoEstado;
                    return nuevoEstado;                 
        });
    }
      
    //JS:function CustomButtom(){}
    return(
        <div onClick={()=>{funciones(posicion)}} className="mi-boton">
        {estadoGato}
        </div>
    );
    }
export default CustomButton;