
import './index.css'
import Logo from './poke.png'
import Charmander from './charmander.png'
import { Box, Button, Paper, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import PetsIcon from '@mui/icons-material/Pets';

function Home() {
    return(
        <>
            <div className='home'>
                <header className='header'>
                    <img 
                    src={Logo} 
                    alt="Pokemon-Logo"
                    width="14%"
                    />
                </header>

                <div className='body'>
                    <div className="div1">
                        <h2>Charmander</h2>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<PetsIcon />}
                            >
                                Categoria: Lagarto
                            </Button>
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<LocalFireDepartmentIcon />}
                                sx = {{
                                    mt: 1,
                                }}
                            >
                                
                                Evolui para: Charmeleon
                            </Button>
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<FormatColorResetIcon />}
                                sx = {{
                                    mt: 1,
                                }}
                            >
                                Fraqueza: Água
                            </Button>
                            
                            <Paper
                                sx = {{
                                    bgcolor: 'transparent',
                                    borderRadius: 5,
                                }}
                                className="paper"
                            >
                                <Typography 
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx = {{
                                        m: 7,
                                    }}
                                    className='subTitulo'
                                >
                                    Charmander é um Pokémon do Tipo Fogo e um dos Pokémon capturáveis do jogo Pokémon Go. Ele evolui para Charmeleon no nível 16 e para Charizard no nível 36.
                                </Typography>
                            </Paper>
                        </Box>
                        
                    </div>
                    
                    <div className="div2">
                        <img 
                        src={Charmander} 
                        alt="Pokemon-Logo"
                        width="60%"
                        />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Home