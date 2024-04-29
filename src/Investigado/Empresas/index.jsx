import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, IconButton, Modal, Box, Divider } from '@mui/material';
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Cellphones from '../Cellphones';

import './style.css'

export default function Empresas() {
    const [openCellphones, setOpenCellphones] = useState(false);

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
        <div className='empresas-container'>
            <Card sx={{ width: 275 }}>
                <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <BsBuildingsFill size={150} color='#C1C7D0' />
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                    <div className='card-row-empresas'>
                        <span className='information'>RAZÃO SOCIAL: </span>
                        <span>NAVI CARNES INDUSTRIA E COMERCIO LTDA ME</span>
                    </div>
                    <div className='card-row-empresas'>
                        <span className='information'>CNPJ: </span>
                        <span>02222267000319</span>
                    </div>
                    <div className='card-row-empresas'>
                        <span className='information'>ADMISSÃO: </span>
                        <span>07/03/2020</span>
                    </div>
                    <div className='card-row-empresas'>
                        <span className='information'>VINCULO: </span>
                        <span>TESTE</span>
                    </div>
                    <div className='card-row-empresas'>
                        <span className='information'>RENDA: </span>
                        <span>3.121,00</span>
                    </div>
                    <div className='card-row-empresas'>
                        <span className='information'>ENDEREÇOS: </span>
                        <Button
                            variant='contained'
                            color='primary'
                            size='small'
                        >
                            ver
                        </Button>
                    </div>
                    <div className='card-row-empresas'>
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
        </div>
    );
}