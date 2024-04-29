import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, IconButton, Modal, Box, Divider } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import InfoCompleta from './InfoCompleta';
import Cellphones from './Cellphones';
import Emails from './Emails';
import Vinculos from './Vinculos';
import Empresas from './Empresas';
import Enderecos from './Enderecos';

import './style.css'


export default function Investigado() {
    const [openInfo, setOpenInfo] = useState(false);
    const [openCellphones, setOpenCellphones] = useState(false);
    const [openEmails, setOpenEmails] = useState(false);
    const [openVinculos, setOpenVinculos] = useState(false);
    const [openEmpresas, setOpenEmpresas] = useState(false);
    const [openEnderecos, setOpenEnderecos] = useState(false);

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
            p: 0,
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
                        onClick={() => setOpenCellphones(true)}
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
                        onClick={() => setOpenEmails(true)}
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
                        onClick={() => setOpenVinculos(true)}
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
                        onClick={() => setOpenEmpresas(true)}
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
                        onClick={() => setOpenEnderecos(true)}
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
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Informação Completa</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenInfo(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <InfoCompleta close={setOpenInfo} />
                </Box>
            </Modal>
            <Modal
                open={openCellphones}
                onClose={() => setOpenCellphones(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Telefones</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenCellphones(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <Cellphones close={setOpenCellphones} />
                </Box>
            </Modal>
            <Modal
                open={openEmails}
                onClose={() => setOpenEmails(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Emails</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenEmails(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <Emails />
                </Box>
            </Modal>
            <Modal
                open={openVinculos}
                onClose={() => setOpenVinculos(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Vinculos</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenVinculos(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <Vinculos />
                </Box>
            </Modal>
            <Modal
                open={openEmpresas}
                onClose={() => setOpenEmpresas(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Empresas</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenEmpresas(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <Empresas />
                </Box>
            </Modal>
            <Modal
                open={openEnderecos}
                onClose={() => setOpenEnderecos(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={propriedadesModal(1300)}>
                    <div className='modal-header'>
                        <div className='modal-header-row'>
                            <h1>Endereços</h1>
                            <IconButton aria-label="fechar" onClick={() => setOpenEnderecos(false)}>
                                <IoMdClose />
                            </IconButton>
                        </div>
                        <Divider sx={{ width: '100%', marginTop: '1rem' }} />
                    </div>
                    <Enderecos />
                </Box>
            </Modal>
        </div>
    );
}
