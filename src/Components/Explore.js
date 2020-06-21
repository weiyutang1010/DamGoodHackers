import React, { Component } from 'react'
import image1 from './Images/penguin.png'
import image2 from './Images/Bearstack.png'
import image3 from './Images/Samoyed.png'
import image4 from './Images/CoolCat.jpg'
import Story from './Story/Story'

/*const desc1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt minima repudiandae. In atque reprehenderit, dolore aliquam magnam laudantium. Porro explicabo harum asperiores eveniet est deleniti nisi laborum? 

Optio omnis quidem obcaecati cum corrupti minus accusamus ad vel corporis, voluptatem et dicta nisi dolorum inventore eum, sequi excepturi voluptatum! Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia dolorem id.` */

const desc1 = `Pembroke the Penguin is a current resident at the American Penguin Sanctuary. He was born in May 2020 and likes wearing his shell as a hat. His adorableness has garnered worldwide attention and has been featured on multiple news outlets. 

Pembroke loves eating sardines and swimming with his siblings, Penny and Philip, when he's not being interviewed.`

const desc2 = `Grizly, the Grizly Bear, Panda, the Panda Bear, and Ice Bear, the Polar Bear live in a high-rise apartment with their surrogate caretaker, Gary Johnson. The three bear brothers were raised in captivity and love interacting with people. Some might even say they act like people themselves!

Grizly enjoys sunbathing on the roof of Gary's apartment, Panda relaxes by watching television, and Ice Bear loves to cook! Follow their antics on Instagram @webarebears!`

const desc3 = `Samuel the Samoyed was adopted by Dr. Jane Jackson in May 2017. Dr. Jackson is a licensed clinical therapist and brings Samuel to work everyday for clients who engage in animal-assisted therapy. Samuel has helped Dr. Jackson with hundreds of clients since his adoption, and has no plans of retiring soon! 

When Samuel is not at his job, he enjoys long walks at the beach and digging holes at the beach. He enjoys drinking filtered water and enjoys eating the occasional boiled chicken slices.`

const desc4 = `Morpheus the Cat is a cool cat that can be found on the cover of various cat magazines, such as Feline Fancy and Purr Vogue. He began his career as a model on Instagram and his following has been growing since.

His favorite fashion brands include Louis Vuitton and Gucci. Morpheus can be found wearing Gucci collars regularly.`

export default class Explore extends Component {
    state = [{
                title: "Pembroke the Penguin",
                desc: desc1,
                image: image1,
                width: "210px",
                alt: "Alternative text1"
            },
            {
                title: "Three Cute Bears",
                desc: desc2,
                image: image2,
                width: "210px",
                alt: "Alternative text2"
            },
            {
                title: "Samuel the Samoyed",
                desc: desc3,
                image: image3,
                width: "210px",
                alt: "Alternative text3"
            },
            {
                title: "Morpheus the Cat",
                desc: desc4,
                image: image4,
                width: "210px",
                alt: "Alternative text4"
            },]
    
    createStory(i) {
        return (
            <div>
                <Story 
                storyTitle={this.state[i].title} 
                storyContent={this.state[i].desc} 
                storyImage={this.state[i].image} 
                altImage={this.state[i].alt}
                imgWidth={this.state[i].width}
                style={storyStyle}
                />
                <hr style={{
                    transform: 'translate(-20%, 0)',
                    width: '150vw',
                    color: '#ccc',
                }}></hr>
            </div>
        )
    }

    render() {
        console.log(this.state);
        return (
            <div id="stories" style={pageStyle}>
                <h2 style={{
                    fontSize: '35px',
                    marginBottom: '10px',
                }}>Explore</h2>
                {/* Still thinking about how to do these with a loop */}
                {this.createStory(0)}
                {this.createStory(1)}
                {this.createStory(2)}
                {this.createStory(3)}
            </div>
        )
    }
}

const pageStyle = {
    position: 'absolute',
    top: '80px',
    left: '15%',
    width: '70%',
    height: '200%',
}

const storyStyle = {
    display: 'grid',
    gridTemplateColumns: '25% auto',
    gridTemplateRows: '20% auto',
    backgroundColor: '#FFF4D2',
    margin: '20px 0',
    height: '40vh',
    boxShadow: '5px 5px 3px 4px #ccc',
    overflow: 'hidden',
    padding: '20px',
}
