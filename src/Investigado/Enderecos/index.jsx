import React from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';
import { FaHouse } from "react-icons/fa6";

import './style.css'

export default function Enderecos() {
    return (
        <div className='enderecos-container'>
            <Card sx={{ width: 275 }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <FaHouse size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <div className='card-row-enderecos'>
                        <span className='information'>LOGRADOURO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>NÚMERO: </span>
                        <span>154</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>COMPLEMENTO: </span>
                        <span>AP. 501</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>BAIRRO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>CIDADE: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>ESATDO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>CEP/COD. ÁREA: </span>
                        <span>79070094</span>
                    </div>
                    <div className='card-row-enderecos'>
                        <span className='information'>TELEFONE RELACIONADO: </span>
                        <span>79070094</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
