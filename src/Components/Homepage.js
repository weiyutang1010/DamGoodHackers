import React from 'react'
import Story from './Story/Story'
import image1 from './Images/Samoyed.png'

export default function Homepage() {
    return (
        <div style={{
            height:'100vh', 
            width:'100vw', 
            background: 'linear-gradient(148deg, rgba(252,234,230,1) 0%, rgba(252,255,221,1) 100%)'}}>
            <div style={homePageStyle} id="homepage">
                <h1>Cheer of the day</h1>
                <Story 
                storyTitle={storyTitle1} 
                storyContent={storyContent1} 
                storyImage={storyImage1} 
                altImage={"A happy Samoyed dog"} 
                imgWidth={"350px"}
                style={storyStyle}
                />
            </div>
        </div>
    )
}

// Placeholder for the story, Might consider connecting it with database
const storyTitle1 = `Meet Samuel!`;
const storyContent1 = `Samuel was adopted by Dr. Jane Jackson in May 2017. Dr. Jackson is a licensed clinical therapist and brings Samuel to work everyday for clients who engage in animal-assisted therapy. Samuel has helped Dr. Jackson with hundreds of clients since his adoption, and has no plans of retiring soon! 

When Samuel is not at his job, he enjoys long walks at the beach and digging holes at the beach. He enjoys drinking filtered water and enjoys eating the occasional boiled chicken slices.`
const storyImage1 = image1;

const homePageStyle = {
    position: 'absolute',
    //background: '#fff',
    height: '80%',
    width: '75%',
    top: '15%',
    left: '12.5%',
    overflow: 'hidden',
}

const storyStyle = {
    // position: 'relative',
    // float: 'right',
    display: 'grid',
    gridTemplateColumns: '37% auto',
    gridTemplateRows: '6% auto',
    //background: '#333',
    width: "100%",
    marginTop: '20px',
}