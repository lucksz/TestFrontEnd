import React, { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, Button, IconButton, Modal, Box, Divider, Tooltip } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Cellphones from '../Cellphones';
import Enderecos from '../Enderecos';
import { AppContext } from '../../App';

import './style.css'


export default function Vinculos() {
    const { vinculos } = useContext(AppContext)

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
        <div className='vinculos-container'>
            {vinculos.map((value, index) => (
                <Card sx={{ minWidth: 350 }} key={index}>
                    <CardMedia sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <IoPersonCircleSharp size={150} color='#C1C7D0' />
                    </CardMedia>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }} >
                        <div className='card-row-vinculos'>
                            <span className='information'>NOME: </span>
                            <span>{value['full name']}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>CPF: </span>
                            <span>{value['cpf'] ? value['cpf'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>VINCULO: </span>
                            <span>{value['vinculo']}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>PROCON: </span>
                            <span>{value['procon'] ? value['procon'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>SEXO: </span>
                            <span>{value['sexo'] ? value['sexo'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>TITULO DE ELEITOR: </span>
                            <span>{value['titulo de eleitor'] ? value['titulo de eleitor'] : 'Desconhecido'}</span>
                        </div>
                        <div className='card-row-vinculos'>
                            <span className='information'>ENDEREÇOS: </span>
                            {value['endereco'] || value['location'] ? (
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='small'
                                    onClick={() => abrirEndereco(value['endereco'] || value['location'])}
                                >
                                    ver
                                </Button>
                            ) : (
                                <Tooltip title='Endereço desconhecido'>
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
                        <div className='card-row-vinculos'>
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
