import React, { useContext } from 'react';
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

import { AppContext } from '../../App';

import './style.css'

export default function InfoCompleta() {
    const { investigado } = useContext(AppContext)

    return (
        <div className='info-container'>
            <div className='info-grid'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoPersonCircleSharp size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>Nome: {investigado['full name']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaCalculator size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>CPF: {investigado['cpf']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaCalculator size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>CTPS: {investigado['ctps']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaStar size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>DATA DE NASCIMENTO: {investigado['data nascimento']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BsFillSuitcaseLgFill size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>PROFISSÃO: {investigado['profissao']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoMdSchool size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>ESCOLARIDADE: {investigado['escolaridade']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BiWorld size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>NACIONALIDADE: {investigado['nacionalidade']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaMapMarkerAlt size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>ESTADO DE NASCIMENTO: {investigado['estado_nascimento']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <GoNumber size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>IDADE: {investigado['idade']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <IoPerson size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>IDENTIDADE: {investigado['identidade']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaTable size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>PIS/PASEP: {investigado['pis/pasep']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <BsGenderAmbiguous size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>SEXO: {investigado['sexo']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <FaMoneyBill size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>RECEITA: {investigado['status receita']}</span>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }} >
                        <MdHowToVote size={25} color='#C1C7D0' />
                        <span className='span-card-investigado'>TITULO DE ELEITOR: {investigado['titulo de eleitor']}</span>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
