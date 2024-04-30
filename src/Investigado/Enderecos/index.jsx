import React from 'react';
import { Card, CardMedia, CardContent } from '@mui/material';
import { FaHouse } from "react-icons/fa6";

import './style.css'

export default function Enderecos(props) {
    const { enderecos } = props

    return (
        <div className='enderecos-container'>
            {enderecos.map((value, index) => (
                <Card sx={{ width: 350 }} key={index}>
                    <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <FaHouse size={150} color='#C1C7D0' />
                    </CardMedia>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                        <div className='card-row-enderecos'>
                            <span className='information'>LOGRADOURO: </span>
                            <span>{value['logradouro'] || value['endereco']}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>NÚMERO: </span>
                            <span>{value['numero'] ? value['numero'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>COMPLEMENTO: </span>
                            <span>{value['complemento'] ? value['complemento'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>BAIRRO: </span>
                            <span>{value['bairro']}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>CIDADE: </span>
                            <span>{value['city']}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>ESTADO: </span>
                            <span>{value['area']}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>CEP/COD. ÁREA: </span>
                            <span>{value['area code'] ? value['area code'] : (value['cep ou zipcode'] ? value['cep ou zipcode'] : 'Desconhecido')}</span>
                        </div>
                        <div className='card-row-enderecos'>
                            <span className='information'>TELEFONE RELACIONADO: </span>
                            <span>{value['telefone relacionado'] ? value['telefone relacionado'] : 'Desconhecido'}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
