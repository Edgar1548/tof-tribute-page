//import logo from './logo.svg';
import Section from "../components/sections/section/section";
import Subsection from "../components/sections/subsection/subsection";
import Gallery from "../components/gallery/gallery";
import Stack from "@mui/material/Stack";
function Home() {
    const data = require('../utils/data.json')
    let sections = data.map((section) => {
        return (
        <Section
            key={section.title}
            title={section.title}
            description={section.description}
        >
            {section.subsection && (
                <Subsection Subsection subData={section.subsection}></Subsection>
            )}
            {section.imgs && <Gallery imgs={section.imgs}></Gallery>}
        </Section>
        );
    });

    return (
        <div className="App">
        <Stack
            sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            }}
            p={10}
            spacing={1}
        >
            {sections}
        </Stack>
        </div>
    );
}

export default Home;
