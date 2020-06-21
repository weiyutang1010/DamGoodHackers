import React from 'react'

// Add your description and name below

export default function About() {
    return (
        <div style={aboutStyle} id="aboutPage">
            <div>
                <h1>Cheer Me Up!</h1>
                <p style={{
                    whiteSpace:'pre-wrap',
                    paddingLeft:'3%',
                    marginTop:'1%',
                }}
                    id="aboutcmu"
                >{cheermeup}</p>
            </div>
            <div style={{marginTop: "2%"}}>
                <h1>About Us</h1>
                <div style={{
                    paddingLeft:'3%',
                    marginTop:'1%',
                }}
                    id="aboutus"
                >
                    {person1.printing()}
                    {person2.printing()}
                </div>
            </div>
        </div>
    )
}

class Person {
    constructor (name, description) {
        this.name = name;
        this.description = description;
    }

    printing() {
        return (
            <div className="Person">
                <h2>{this.name}</h2>
                <p style={{
                    whiteSpace: 'pre-wrap',
                    marginTop: '10px',
                    marginBottom: '20px',
                }}>{this.description}</p>
            </div>
        )
    }
}

const desc1 = `Wei Yu is a current undergraduate student at Oregon State University. He is a computer science and math major and will be taking the AI and statistics options. He has always been passionate about programming, especially when it comes to competitive programming and hackathon. He hopes to stay active in the computer science community and help other people engage in it.`; 

const desc2 = `Christina is currently a post-bacclaureate student of Oregon State University's Computer Science program. After her first Bachelor's degree in Psychology, she had discovered that she gravitated towards Computer Science, and started to pursue a Computer Science Degree. She hopes that one day she will become proficient enough in Computer Science to build an application to help people get connected to community resources that would aid enhance their emotional well-being.`;


const person1 = new Person("Wei Yu", desc1);
const person2 = new Person("Christina", desc2);

const cheermeup = `Cheer Me Up! is a website concept created by students from Oregon State University for Beaverhacks 2020. Cheer Me Up! aims to uplift people by showcasing cute animals and their lives. The homepage of Cheer Me Up! showcases the Pet of the Day, the Explore page allows you to browse through pets that have been featured on Cheer Me Up!, and the Search page allows you to search through pets based on the title.`


const aboutStyle = {
    position: 'absolute',
    width: '80%',
    top: '13%',
    left: '10%',
}