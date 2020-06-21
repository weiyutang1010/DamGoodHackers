import React from 'react'

// Add your description and name below

export default function About() {
    return (
        <div style={aboutStyle}>
            <div>
                <h1>Cheer Me Up!</h1>
                <p style={{
                    whiteSpace:'pre-wrap',
                    paddingLeft:'3%',
                    marginTop:'1%',
                }}>{cheermeup}</p>
            </div>
            <div style={{marginTop: "2%"}}>
                <h1>About Us</h1>
                <div style={{
                    paddingLeft:'3%',
                    marginTop:'1%',
                }}>
                    {person1.printing()}
                    {person2.printing()}
                    {person3.printing()}
                    {person4.printing()}
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
                    marginBottom: '1.5%',
                }}>{this.description}</p>
            </div>
        )
    }
}

const desc1 = ``; //I will add mine in later. Just do your own part for the about+ -Wei Yu
const desc2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;
const desc3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;
const desc4 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;

const person1 = new Person("Wei Yu", desc1);
const person2 = new Person("Christina", desc2);
const person3 = new Person("Person3", desc3);
const person4 = new Person("Person4", desc4);

const cheermeup = `Cheer Me Up! is a website concept created by students from Oregon State University for Beaverhacks 2020. Cheer Me Up! aims to uplift people by showcasing cute animals and their lives. The homepage of Cheer Me Up! showcases the Pet of the Day, the Explore page allows you to browse through pets that have been featured on Cheer Me Up!, and the Search page allows you to search through pets.`


const aboutStyle = {
    position: 'absolute',
    width: '80%',
    top: '13%',
    left: '10%'
}