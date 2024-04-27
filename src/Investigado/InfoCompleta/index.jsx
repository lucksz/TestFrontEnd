import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoNumber } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { FaTable } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import './style.css'

export default function InfoCompleta(props) {
    const { close } = props

    return (
        <div className='info-container'>
            <div className='info-grid'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoPersonCircleSharp size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>Nome: JOSÉ MARIA TECHBIZ</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaCalculator size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>CPF: 94436504352</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaCalculator size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>CTPS: 00070</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaStar size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>DATA DE NASCIMENTO: 25/12/0000</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BsFillSuitcaseLgFill size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>PROFISSÃO: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoMdSchool size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>ESCOLARIDADE: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BiWorld size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>NACIONALIDADE: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaMapMarkerAlt size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>ESTADO DE NASCIMENTO: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <GoNumber size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>IDADE: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoPerson size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>IDENTIDADE: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaTable size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>PIS/PASEP: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BsGenderAmbiguous size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>SEXO: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaMoneyBill size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>RECEITA: TESTE</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <MdHowToVote size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>TITULO DE ELEITOR: TESTE</span>
                    </CardContent>
                </Card>
            </div>
            <Button
                variant='contained'
                color='primary'
                onClick={() => close(false)}
            >
                fechar
            </Button>
        </div>
    );
}
