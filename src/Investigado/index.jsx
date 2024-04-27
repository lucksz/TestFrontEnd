import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Modal, Box } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";

import InfoCompleta from './InfoCompleta';

import './style.css'


export default function Investigado() {
    const [openInfo, setOpenInfo] = useState(false);

    const propriedadesModal = (w) => {
        return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: w,
            bgcolor: 'background.paper',
            borderRadius: '10px',
            boxShadow: 24,
            p: 4,
        }
    }

    return (
        <div className='container-investigado'>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <BsFillInfoCircleFill size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Informação completa</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                        onClick={() => setOpenInfo(true)}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <IoIosPhonePortrait size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Telefones</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <IoIosMail size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Emails</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <IoPersonCircleSharp size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Vínculos</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <BsBuildingsFill size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Empresas</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '1rem' }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    <FaHouse size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <span className='span-card-investigado'>Endereços</span>
                </CardContent>
                <CardActions sx={{ paddingInline: '1rem' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ width: '100%' }}
                    >
                        Abrir
                    </Button>
                </CardActions>
            </Card>

            <Modal
                open={openInfo}
                onClose={() => setOpenInfo(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <InfoCompleta close={setOpenInfo} />
                </Box>
            </Modal>
        </div>
    );
}
