import React, { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, Button, IconButton, Modal, Box, Divider, Tooltip } from '@mui/material';
import { BsBuildingsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Cellphones from '../Cellphones';
import Enderecos from '../Enderecos';

import { AppContext } from '../../App';

import './style.css'

export default function Empresas() {
    const { empresas } = useContext(AppContext)

    const [openCellphones, setOpenCellphones] = useState(false);
    const [openEnderecos, setOpenEnderecos] = useState(false);
    const [telefoneSelecionado, setTelefoneSelecionado] = useState([])
    const [enderecoSelecionado, setEnderecoSelecionado] = useState([])

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

    const abrirTelefone = (dados) => {
        setTelefoneSelecionado(dados)

        setOpenCellphones(true)
    }

    const abrirEndereco = (dados) => {
        setEnderecoSelecionado(dados)

        setOpenEnderecos(true)
    }

    return (
        <div className='empresas-container'>
            {empresas.map((value, index) => (
                <Card sx={{ width: 350 }} key={index}>
                    <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <BsBuildingsFill size={150} color='#C1C7D0' />
                    </CardMedia>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                        <div className='card-row-empresas'>
                            <span className='information'>RAZÃO SOCIAL: </span>
                            <span>{value['razao social']}</span>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>CNPJ: </span>
                            <span>{value['cnpj']}</span>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>ADMISSÃO: </span>
                            <span>{value['admissao'] ? value['admissao'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>VINCULO: </span>
                            <span>{value['vinculo']}</span>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>RENDA: </span>
                            <span>{value['renda'] ? value['renda'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>ENDEREÇOS: </span>
                            <Button
                                variant='contained'
                                color='primary'
                                size='small'
                                onClick={() => abrirEndereco(value['endereco'])}
                            >
                                ver
                            </Button>
                        </div>
                        <div className='card-row-empresas'>
                            <span className='information'>TELEFONES: </span>
                            {value['telefone'] ? (
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    onClick={() => abrirTelefone(value['telefone'])}
                                >
                                    ver
                                </Button>
                            ) : (
                                <Tooltip title='Telefone desconhecido'>
                                    <div>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            size='small'
                                            disabled
                                        >
                                            ver
                                        </Button>
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
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
                    <Cellphones close={setOpenCellphones} telefones={telefoneSelecionado} />
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
                    <Enderecos enderecos={enderecoSelecionado} />
                </Box>
            </Modal>
        </div>
    );
}