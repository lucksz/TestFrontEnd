import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './style.css'

export default function Home() {
    return (
        <div className='home-container'>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <IoPersonCircleSharp size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column'}} >
                    <div className='card-row'>
                        <span className='information'>NOME: </span>
                        <span>JOSÉ MARIA TECHBIZ</span>
                    </div>
                    <div className='card-row'>
                        <span className='information'>CPF: </span>
                        <span>94436504352</span>
                    </div>
                    <div className='card-row'>
                        <span className='information'>TELEFONE: </span>
                        <span>5567993307191</span>
                    </div>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem'}}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        component={Link}
                        to={'/investigado'}
                    >
                        Mais informações
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
