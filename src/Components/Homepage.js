import React from 'react'
import Story from './Story/Story'
import image1 from './Images/Samoyed.png'

export default function Homepage() {
    return (
        <div style={homePageStyle}>
            <h1>Cheer of the day</h1>
            <Story 
            storyTitle={storyTitle1} 
            storyContent={storyContent1} 
            storyImage={storyImage1} 
            altImage={"A happy Samoyed dog"} 
            imgWidth={"350px"}/>
        </div>
    )
}

// Placeholder for the story, Might consider connecting it with database
const storyTitle1 = `Story Title`;
const storyContent1 = `With multiple natural disasters wreaking havoc one after the other, agencies of every stripe are coming together to provide aid and support. The National Guard, U.S. Department of Justice, ATF, U.S. Marshal Service, BLM, and numerous fire departments are staged where people need them. And when they have downtime, many of them are stepping in to assist in a different way.

Between shifts at their “real jobs” helping people in need in the Houston area, men and women in uniform are walking dogs and stepping in to help wherever needed to care for pets displaced by Hurricane Harvey. They’re easy to spot, and though they may wear badges and logos from different agencies, they all share one important badge of honor: animal lover.`;
const storyImage1 = image1;

const homePageStyle = {
    position: 'absolute',
    top: '10%',
    left: '10%',
}