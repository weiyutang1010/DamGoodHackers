import React, { Component } from 'react'
import image1 from './Images/penguin.png'
import image2 from './Images/Bearstack.png'
import image3 from './Images/Samoyed.png'
import image4 from './Images/CoolCat.jpg'
import Story from './Story/Story'

export default class Explore extends Component {
    state = [{
                title: "Title1",
                desc: "Description1",
                image: image1,
                width: "190px",
                alt: "Alternative text1"
            },
            {
                title: "Title2",
                desc: "Description2",
                image: image2,
                width: "190px",
                alt: "Alternative text2"
            },
            {
                title: "Title3",
                desc: "Description3",
                image: image3,
                width: "190px",
                alt: "Alternative text3"
            },
            {
                title: "Title4",
                desc: "Description4",
                image: image4,
                width: "190px",
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
                    position: 'absolute',
                    left: '-150%',
                    width: '100vw',
                }}></hr>
            </div>
        )
    }

    render() {
        console.log(this.state);
        return (
            <div className="stories" style={pageStyle}>
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
    left: '20%'
}

const storyStyle = {
    backgroundColor: '#FFF4D2'
}
