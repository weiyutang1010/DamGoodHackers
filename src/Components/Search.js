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

// function handleClick(e) {
//     e.preventDefault();
//     console.log("I am clicked!");
// }

export default class Search extends Component {
    state = {
        value: "",
    }

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

    handleClick = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div style={pageStyle}>
                <form>
                    {/* Style in app.css */}
                    <label htmlFor="searchBar" id="searchBarLabel">Search for Image</label>
                    <br></br>
                    <input type="text" id="searchBar" style={searchBarStyle} placeholder="Enter your search here" value={this.state.value} onChange={this.handleChange}/>
                </form>

                <span style={{fontSize:'21px'}}>Tags: </span>
                <button style={tagStyle} onClick={this.handleClick} value="animal">Animal</button>
                <button style={tagStyle} onClick={this.handleClick} value="animal">Animal</button>
                <button style={tagStyle} onClick={this.handleClick} value="animal">Animal</button>
                <button style={tagStyle} onClick={this.handleClick} value="animal">Animal</button>

                <h2 style={{marginTop: "4%"}}>Results</h2>
                <div id="results" style={resultStyle}>
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
    left: '10%',
    width: '80%',
    margin: '0 auto',
}

const resultStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
}

const storyStyle = {
    flexDirection: 'column',
    // border: '1px black solid',
    backgroundColor: '#FFF4D2',
    flexGrow: '1',
    margin: '0 15px',
}

const searchBarStyle = {
    background: "#fff",
    border: "1px #666 solid",
    padding: '12px 20px',
    margin: '8px 0',
    height: "40px",
    width: "90%",
    borderRadius: "20px",
    fontSize: "20px",
    textAlign: "left",
    outline: "none",
}

const tagStyle = {
    margin: '0px 2px',
    border: '1px solid grey',
    borderRadius: '2px',
    padding: '5px 5px',
    cursor: 'pointer',
    background: '#fff',
}