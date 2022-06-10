import './index.css'
import api from '../../services/api'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <>
            <div className='content'>
                <div className='card'>
                    <ul>
                        {list.map((item) => (
                            <li key={item.name}>
                                <Link to={"/pokemon/"+ item.name}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default ListPokemons