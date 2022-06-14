import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Gengar from './gengar.png'
import './index.css'

function Footer() {
    return(
        <Box className="footer">
            <Box 
                className="leftSide"
            >
                <img src={Gengar} width="70%" className="image"/>
            </Box>

            <Box className="rigthSide">
                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 42,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    Desenvolvido por Otávio Araujo
                </Typography>

                <img
                    src="https://avatars.githubusercontent.com/u/51797012?v=4"
                    alt='Imagem do desenvolvedor'
                    width="300px"
                    className="devImage"
                />

                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://github.com/otavioaraujo08" target="_blank">
                        <GitHubIcon /> Github    
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://www.linkedin.com/in/ot%C3%A1vio-araujo-77474b1ab" target="_blank">
                        <LinkedInIcon /> Linkedin
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://pokeapi.co/" target="_blank">
                        <ArticleIcon /> Documentação
                    </a>
                </Typography>
                
            </Box>
        </Box>
    )
}

export default Footer