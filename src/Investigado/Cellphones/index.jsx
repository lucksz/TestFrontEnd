import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutlineSignalWifiOff } from "react-icons/md";
import oi from '../../assets/Oi_logo_2022.png'
import claro from '../../assets/LogoClaro2017.png'
import nextel from '../../assets/2560px-LOGO_OF_NEXTEL.svg.png'
import vivo from '../../assets/Logo_VIVO.svg.png'
import tim from '../../assets/tim-25.png'
import './style.css'

export default function Cellphones(props) {
    const { close, telefones } = props

    const showOPLogo = (dado) => {
        switch (dado) {
            case 'NEXTEL':
                return (
                    <img className='logo-operadoras' src={nextel} />
                )
            case 'VIVO':
                return (
                    <img className='logo-operadoras' src={vivo} />
                )
            case 'CLARO':
                return (
                    <img className='logo-operadoras' src={claro} />
                )
            case 'OI':
                return (
                    <img className='logo-operadoras' src={oi} />
                )
            case 'TIM':
                return (
                    <img className='logo-operadoras' src={tim} />
                )
            default:
                return(
                    <MdOutlineSignalWifiOff size={25} color='#C1C7D0' />
                )

        }
    }
    
    return (
        <div className='cellphones-container'>
            <div className='cellphones-grid'>
                {telefones.map((value, index) => (
                    <Card sx={{ minWidth: 275 }} key={index}>
                        <CardContent>
                            <div className='card-grid'>
                                {showOPLogo(value['operadora'])}
                                <span className='span-card-investigado'>5567993307191</span>
                                {value['whatsapp'] ? <FaSquareWhatsapp size={25} color={value['whatsapp'] == 'Nao' ? '#C1C7D0':'#44EB62'} /> : <FaSquareWhatsapp size={25} color={'#C1C7D0'} />}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='linha-final-cellphones'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='legendas-card'>
                            <div className='legenda'>
                                <MdOutlineSignalWifiOff size={25} color='#C1C7D0' />
                                <span>Operadora desconhecida</span>
                            </div>
                            <div className='legenda'>
                                <FaSquareWhatsapp size={25} color='#C1C7D0' />
                                <span>Sem WhatsApp</span>
                            </div>
                            <div className='legenda'>
                                <FaSquareWhatsapp size={25} color='#44EB62' />
                                <span>Com WhatsApp</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
