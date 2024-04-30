import React, { useContext } from 'react';
import { Card, CardContent } from '@mui/material';
import oi from '../../assets/Oi_logo_2022.png'
import gmail from '../../assets/Gmail_icon_(2020).svg.png'
import { AppContext } from '../../App';

import './style.css'

export default function Emails() {
    const { emails } = useContext(AppContext)

    return (
        <div className='emails-container'>
            {emails.map((value, index) => (
                <Card sx={{ minWidth: 275 }} key={index}>
                    <CardContent>
                        <div className='card-grid-emails'>
                            <img className='logo-operadoras' src={value['email address'].includes('oi') ? oi : gmail} />
                            <span className='span-card-investigado'>{value['email address']}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}