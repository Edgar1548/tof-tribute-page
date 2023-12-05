import "./gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem  from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import ImageInformation from "./information/information";
import { getImageUrl } from "../../utils/utils";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiImageListItem: {
            styleOverrides: {
                img: {
                    objectFit: 'fill',
                }
            },
        },
    },
});

function Gallery({ imgs = [] }) {
    const photos = imgs.map((info) => {
        const url = getImageUrl(info);
        return (  
            <ImageListItem key={info.id} xs={2} sm={4} md={4}>
                <img 
                    srcSet={`${url}?auto=format&dpr=2 2x`}
                    src={`${url}?auto=format`}
                />
                <ImageInformation data={info}></ImageInformation>
            </ImageListItem>
        );
    });
    return (
        <Box paddingLeft={2} paddingRight={2} alignContent="center">
            <ThemeProvider theme={theme}>
                <ImageList
                    cols={imgs.length > 3 ? 3 : imgs.length}
                    gap={30}
                    
                >
                    {photos}
                </ImageList>
            </ThemeProvider>
        </Box>
    );
}
export default Gallery;
