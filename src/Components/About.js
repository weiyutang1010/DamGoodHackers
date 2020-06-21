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

const desc1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;
const desc2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;
const desc3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;
const desc4 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam voluptatem expedita sed sequi fuga eos molestiae praesentium. Minima autem aliquid quae quibusdam, nulla asperiores voluptatem mollitia distinctio dolores doloribus totam nisi nihil! Voluptatum, tenetur veritatis illo cumque magni dolorem corrupti, labore saepe commodi quibusdam magnam nostrum, repellat ea officiis?`;

const person1 = new Person("Wei Yu", desc1);
const person2 = new Person("Person2", desc2);
const person3 = new Person("Person3", desc3);
const person4 = new Person("Person4", desc4);

const cheermeup = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis cumque laborum ex numquam expedita nostrum pariatur suscipit obcaecati commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum suscipit voluptate. Itaque repellendus magnam cumque quaerat non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illum vero earum nostrum commodi voluptatibus labore corrupti libero debitis obcaecati. Distinctio ex aliquid quod, accusamus commodi deserunt quaerat fuga odit sequi! Autem?

Fugit nemo, porro in quia laborum facilis rerum ratione! Optio veritatis blanditiis autem ipsum voluptatum dicta quibusdam harum quo repudiandae possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium modi, ratione iure vero inventore laborum!`


const aboutStyle = {
    position: 'absolute',
    width: '80%',
    top: '13%',
    left: '10%'
}