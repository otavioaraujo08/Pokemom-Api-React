import './index.css'
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import api_individual from '../../services/apiIndividual';
import Ghosts from './ghosts.png'

function PokemonsDetails() {
    const { id } = useParams()

    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);
    const [error, setError] = useState('');

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api_individual.get(id).then(({data}) => {
            setList(data)

            console.log(data.moves)
        })
        .catch((msgError) => {console.log(msgError)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            {!id  && (
                <Box className="notFoundPage">
                    <>
                        <Typography variant='h2' >
                            Procurando fantasmas ? Página errada !
                        </Typography>
                        <Typography variant='h6' >
                            Redirecionar para home !
                        </Typography>
                    </>
                    

                    <img src={Ghosts} width="480rem"/>
                </Box>
            )}

            {id && (
                <Box className='box'>
                    <Box className="informacoesUm">
                        <Box className="nome">
                            <Typography variant="h4" className="nomes" sx={{ mt: 1}}>
                                {list.name}
                            </Typography>
                        </Box>
                        <Box className="imagen">
                            <img 
                                src={list?.sprites?.front_default} 
                                alt={list.name} 
                                width="70%"
                            />
                        </Box>
                        <Box className="tipo">
                            <Typography 
                                variant="h5"
                                sx={{ m: 1 }}
                                className="nomes"
                            >
                                #{list.id} 
                            </Typography>

                            <Typography 
                                variant="h5"
                                sx={{ m: 1 }}
                                className="nomes"
                            >
                                Pokemon type:  {list?.types?.map((item) => item.type.name.concat(' '))}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className='informacoesDois'>
                        <Box className='infos'>
                            <Typography 
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className="titulos"
                            >
                                Informações
                            </Typography>
                            <Box className='estatisticas'>
                                {list?.stats?.map((item, index) => { 
                                    return(
                                        <Box key={item.stat.name} className='status'>
                                            <Typography 
                                                variant="h6"
                                                sx={{ ml: 1}}
                                                className="nomes"
                                            >
                                                {item.stat.name}: {item.base_stat}
                                            </Typography>

                                            <LinearProgress 
                                                variant="determinate"
                                                value={item.base_stat}  
                                                sx={{
                                                    width: 400,
                                                    height: 10, 
                                                    mr: 2,
                                                    background: '#eeeeee'
                                                }} 
                                            
                                            />
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Typography 
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className="titulos"
                            >
                                Golpes
                            </Typography>
                            <Box className='golpes'>
                                {list?.moves?.map((item) => {
                                    return(
                                        <Box 
                                            key={item.move.name} 
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                bgcolor: 'background.paper',
                                                borderRadius: 1,
                                            }}    

                                            className='golpesBotoes'
                                        >
                                            <Button 
                                                variant="contained"
                                                sx = {{
                                                    backgroundColor: '#004953'
                                                }}
                                            >
                                                {item.move.name}
                                            </Button>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}            
        </>
    )
}

export default PokemonsDetails