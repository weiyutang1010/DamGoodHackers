import React, { Component } from 'react'
import image1 from './Images/penguin.png'
import image2 from './Images/Bearstack.png'
import image3 from './Images/Samoyed.png'
import image4 from './Images/CoolCat.jpg'
import Story from './Story/Story'


const items = [{
    title: "Pembroke the Penguin",
    desc: "Pembroke the Penguin is a current resident at the American Penguin Sanctuary. He was born...",
    image: image1,
    width: "190px",
    alt: "Alternative text1",
},
{
    title: "Three Cute Bears",
    desc: "Grizly, the Grizly Bear, Panda, the Panda Bear, and Ice Bear, the Polar Bear live...",
    image: image2,
    width: "190px",
    alt: "Alternative text2"
},
{
    title: "Samuel the Samoyed",
    desc: "Samuel the Samoyed was adopted by Dr. Jane Jackson in May 2017. Dr. Jackson is a...",
    image: image3,
    width: "190px",
    alt: "Alternative text3"
},
{
    title: "Morpheus the Cat",
    desc: "Morpheus the Cat is a cool cat that can be found on the cover of various cat...",
    image: image4,
    width: "190px",
    alt: "Alternative text4"
},{
    title: "Pembroke the Penguin",
    desc: "Pembroke the Penguin is a current resident at the American Penguin Sanctuary. He was born...",
    image: image1,
    width: "190px",
    alt: "Alternative text1"
},
{
    title: "Three Cute Bears",
    desc: "Grizly, the Grizly Bear, Panda, the Panda Bear, and Ice Bear, the Polar Bear live...",
    image: image2,
    width: "190px",
    alt: "Alternative text2"
},
{
    title: "Samuel the Samoyed",
    desc: "Samuel the Samoyed was adopted by Dr. Jane Jackson in May 2017. Dr. Jackson is a...",
    image: image3,
    width: "190px",
    alt: "Alternative text3"
},
{
    title: "Morpheus the Cat",
    desc: "Morpheus the Cat is a cool cat that can be found on the cover of various cat...",
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
        title: "",
    }

    createStory(i) {
        const name = items[i].title.toLowerCase();
        const title = this.state.title.toLowerCase();
        if (name.includes(title)) {
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
    }

    handleClick = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div style={pageStyle}>
                <form>
                    <label htmlFor="searchBar" id="searchBarLabel">Search for Image</label>
                    <br></br>
                    <input 
                    type="text"
                    name="title" 
                    id="searchBar" 
                    style={searchBarStyle} 
                    placeholder="Enter your search here"
                    value={this.state.title} 
                    onChange={this.onChange}/>
                </form>

                <span style={{fontSize:'21px'}}>Tags: </span>
                <button style={tagStyle} onClick={this.handleClick} name="title" value="Samoyed">Samoyed</button>
                <button style={tagStyle} onClick={this.handleClick} name="title" value="Penguin">Penguin</button>
                <button style={tagStyle} onClick={this.handleClick} name="title" value="Bear">Bear</button>
                <button style={tagStyle} onClick={this.handleClick} name="title" value="Cat">Cat</button>

                <h2 style={{marginTop: "4%"}}>Results</h2>
                <div id="results" style={resultStyle}>
                    {this.createStory(0)}
                    {this.createStory(1)}
                    {this.createStory(2)}
                    {this.createStory(3)}
                    {this.createStory(4)}
                    {this.createStory(5)}
                    {this.createStory(6)}
                    {this.createStory(7)}
                </div>
            </div>
        )
    }
}

const pageStyle = {
    position: 'absolute',
    top: '100px',
    left: '10%',
    width: '85%',
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
    flexAlign: 'space-around',
    padding: '10px 10px',
    margin: '10px 30px 20px 0',
    textAlign: 'center',
    boxShadow: '5px 5px 3px 4px #ccc',
    maxHeight: '60vh',
    width: '230px',
    overflow: 'hidden',
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
    margin: '0px 4px',
    border: '1px solid grey',
    borderRadius: '20px',
    padding: '5px 10px',
    cursor: 'pointer',
    background: '#fff',
    outline: "none",
}