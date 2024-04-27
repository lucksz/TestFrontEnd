import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutlineSignalWifiOff } from "react-icons/md";
import oi from '../../assets/Oi_logo_2022.png'
import claro from '../../assets/LogoClaro2017.png'
import './style.css'

export default function Cellphones(props) {
    const { close } = props
    return (
        <div className='cellphones-container'>
            <div className='cellphones-grid'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='card-grid'>
                            <FaSquareWhatsapp size={25} color='#C1C7D0' />
                            <span className='span-card-investigado'>5567993307191</span>
                            <MdOutlineSignalWifiOff size={25} color='#C1C7D0' />
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='card-grid'>
                            <FaSquareWhatsapp size={25} color='#44EB62' />
                            <span className='span-card-investigado'>5519981651333</span>
                            <img className='logo-operadoras' src={claro} />
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='card-grid'>
                            <FaSquareWhatsapp size={25} color='#C1C7D0' />
                            <span className='span-card-investigado'>5511862630333</span>
                            <img className='logo-operadoras' src={oi} />
                        </div>
                    </CardContent>
                </Card>
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
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => close(false)}
                >
                    fechar
                </Button>
            </div>
        </div>
    );
}
