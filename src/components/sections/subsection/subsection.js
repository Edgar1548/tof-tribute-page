import React, { useState } from "react";
import Gallery from "../../gallery/gallery";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    components: {
        MuiPagination: {
            styleOverrides: {
                ul: {
                    justifyContent: 'center',
                },
            },
        },
        MuiPaginationItem:{
            styleOverrides: {
                root:{
                    color: 'white',
                }
            },
        }
    },
});
function Subsection({subData = []}) {
    let [page, setPage] = useState(1);
    const PER_PAGE = 1;
    const count = Math.ceil(subData.length / PER_PAGE);
    let data = subData[page-1];
    if (subData) data = subData[page-1];
    const handleChange = (e, p) => {
        setPage(p);
    };
    const sections = (
            <div> {data && 
                <>
                    <Typography variant="h4" component="h3">{data.title}</Typography>
                    <Typography variant="body2" component="p">{data.description}</Typography>
                    <Gallery imgs={data.imgs}></Gallery> 
                </>    
            }
            </div>
        )
    return (
    <>
        <Container>
            {sections}
            <ThemeProvider theme={theme}>
                <Pagination page={page} count={count} onChange={handleChange} sx={{
                    justifyContent:'center',
                }} />
            </ThemeProvider>
        </Container>
    </>)
}

export default Subsection;