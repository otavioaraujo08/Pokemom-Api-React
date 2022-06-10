import './index.css'
import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import api_individual from '../../services/apiIndividual';

function PokemonsDetails() {
    const cores = [
        '#91ff35',
        '#ff6333',
        '#637bfe',
        '#b2102f',
        '#4615b2',
        '#ffea00',
    ]

    const { id } = useParams()

    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api_individual.get(id).then(({data}) => {
            setList(data)

            console.log(data.stats)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            {id && (
                <Box className='box'>
                    <Box className="informacoesUm">
                        <Box className="nome">
                            <Typography variant="h4">
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
                            >
                                #{list.id} 
                            </Typography>

                            <Typography 
                                variant="h5"
                                sx={{ m: 1 }}
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
                            >
                                Infos
                            </Typography>
                            <Box className='estatisticas'>
                                {list?.stats?.map((item, index) => { 
                                    return(
                                        <Box key={item.stat.name} className='status'>
                                            <Typography 
                                                variant="h6"
                                                sx={{ ml: 1}}
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
                                                    background: cores[index]
                                                }} 
                                            
                                            />
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