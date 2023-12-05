import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper"
function Section({children, title, description}) {
    return (
    <>  <Paper elevation={5} 
            sx={{
                p: 2,
                minWidth: '95%',
                maxWidth: '95%',
            }}
        >
            <Typography variant="h3" component="h3" className="section">{title}</Typography>
            <Typography variant="body2" component="p">{description}</Typography>
            {children}
        </Paper>
    </>)    
}

export default Section;
