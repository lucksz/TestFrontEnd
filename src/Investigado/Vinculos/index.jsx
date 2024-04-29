import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, IconButton, Modal, Box, Divider } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Cellphones from '../Cellphones';
import Enderecos from '../Enderecos';

import './style.css'


export default function Vinculos() {
    const [openCellphones, setOpenCellphones] = useState(false);
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
        <div className='vinculos-container'>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <IoPersonCircleSharp size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <div className='card-row-vinculos'>
                        <span className='information'>NOME: </span>
                        <span>JOSÉ MARIA TECHBIZ</span>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>CPF: </span>
                        <span>94436504352</span>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>VINCULO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>ENDEREÇOS: </span>
                        <Button
                            variant='contained'
                            color='primary'
                            size='small'
                            onClick={() => setOpenEnderecos(true)}
                        >
                            ver
                        </Button>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>TELEFONES: </span>
                        <Button
                            variant='contained'
                            color='primary'
                            size='small'
                            onClick={() => setOpenCellphones(true)}
                        >
                            ver
                        </Button>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>PROCON: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>SEXO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-vinculos'>
                        <span className='information'>TITULO DE ELEITOR: </span>
                        <span>TESTE</span>
                    </div>
                </CardContent>
            </Card>
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
