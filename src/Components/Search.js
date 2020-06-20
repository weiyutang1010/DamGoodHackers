import React, { Component } from 'react'
import image1 from './Images/penguin.png'
import image2 from './Images/Bearstack.png'
import image3 from './Images/Samoyed.png'
import image4 from './Images/CoolCat.jpg'
import Story from './Story/Story'

const items = [{
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

export default class Search extends Component {
    createStory(i) {
        return (
            <Story 
            storyTitle={items[i].title} 
            storyContent={items[i].desc} 
            storyImage={items[i].image} 
            altImage={items[i].alt}
            imgWidth={items[i].width}
            style={storyStyle}
            />
        )
    }

    render() {
        return (
            <div style={pageStyle}>
                <form action="POST">
                    {/* Style in app.css */}
                    <label htmlFor="searchBar" id="searchBarLabel">Search for Image</label>
                    <br></br>
                    <input type="text" id="searchBar"/>
                </form>

                <span>Tags: </span>
                <span>Animal</span>
                <span>Animal</span>
                <span>Animal</span>
                <span>Animal</span>

                <h2>Results</h2>
                <div className="results">
                    {this.createStory(0)}
                    {this.createStory(1)}
                    {this.createStory(2)}
                    {this.createStory(3)}
                </div>
            </div>
        )
    }
}

const pageStyle = {
    position: 'absolute',
    top: '100px',
    left: '50px',
}

const storyStyle = {
    backgroundColor: '#FFF4D2'
}