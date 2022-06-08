import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import api_individual from '../../services/apiIndividual';

function PokemonsDetails() {
    const { id } = useParams()

    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api_individual.get(id).then(({data}) => {
            setList(data)

            console.log(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            {id && (
                <>
                    <ul>
                        <li>
                            {list.name}
                        </li>
                        <img src={list?.sprites?.front_default} alt={list.name}/>
                        <p>
                            {list?.types?.map((item) => <li>{item.type.name}</li>)}
                        </p>
                    </ul>
                </>
            )}
        </>
    )
}

export default PokemonsDetails