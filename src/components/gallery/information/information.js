import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./information.css";

function ImageInformation({ data }) {
    return (
            <ImageListItemBar   
                title={data.title}
                subtitle={data.description}
                
            />
    );
}
export default ImageInformation;
