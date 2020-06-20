import React from 'react'

// Add your description and name below

export default function About() {
    return (
        <div style={aboutStyle}>
            <h1>Cheer Me Up!</h1>
            <p>{cheermeup}</p>
            <h1>About Us</h1>
            {person1.printing()}
            {person2.printing()}
            {person3.printing()}
            {person4.printing()}
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
                <p>{this.description}</p>
            </div>
        )
    }
}

const desc1 = `Hello World, 12345678910, abcdefg`;
const desc2 = `Hello World`;
const desc3 = `Hello World`;
const desc4 = `Hello World`;

const person1 = new Person("Wei Yu", desc1);
const person2 = new Person("Person2", desc2);
const person3 = new Person("Person3", desc3);
const person4 = new Person("Person4", desc4);

const cheermeup = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis cumque laborum ex numquam expedita nostrum pariatur suscipit obcaecati commodi. Fugit nemo, porro in quia laborum facilis rerum ratione! Optio veritatis blanditiis autem ipsum voluptatum dicta quibusdam harum quo repudiandae possimus.`


const aboutStyle = {
    position: 'absolute',
    top: '40px',
    padding: '30px',
}