import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import oi from '../../assets/Oi_logo_2022.png'

import './style.css'

export default function Emails() {
    return (
        <div className='emails-container'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className='card-grid'>
                        <img className='logo-operadoras' src={oi} />
                        <span className='span-card-investigado'>email_teste@oi.com.br</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}