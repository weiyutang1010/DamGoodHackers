import React, { Component } from 'react'
import image1 from './Images/penguin.png'
import image2 from './Images/Bearstack.png'
import image3 from './Images/Samoyed.png'
import image4 from './Images/CoolCat.jpg'
import Story from './Story/Story'

const desc1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt minima repudiandae. In atque reprehenderit, dolore aliquam magnam laudantium. Porro explicabo harum asperiores eveniet est deleniti nisi laborum? 

Optio omnis quidem obcaecati cum corrupti minus accusamus ad vel corporis, voluptatem et dicta nisi dolorum inventore eum, sequi excepturi voluptatum! Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia dolorem id.`

export default class Explore extends Component {
    state = [{
                title: "Title1",
                desc: desc1,
                image: image1,
                width: "210px",
                alt: "Alternative text1"
            },
            {
                title: "Title2",
                desc: desc1,
                image: image2,
                width: "210px",
                alt: "Alternative text2"
            },
            {
                title: "Title3",
                desc: desc1,
                image: image3,
                width: "210px",
                alt: "Alternative text3"
            },
            {
                title: "Title4",
                desc: desc1,
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
