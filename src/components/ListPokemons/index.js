import './index.css'
import api from '../../services/api'
import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';

function ListPokemons(){
    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api.get().then(({data}) => {
            setList(data.results)

        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Paper 
            sx={{
                bgcolor: 'warning.main',
                borderRadius: 10
            }}
            
            className='paper'
        >
            <ul className='lista'>
                {list.map((item) => (
                    <li key={item.name}>
                        <a href={"/pokemon/"+ item.name}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </Paper>
    )
}

export default ListPokemons