import React, { Component } from 'react'

// Story for front page.
// Should include story title, image, description

export default class Story extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <h2>{this.props.storyTitle}</h2>
                <img src={this.props.storyImage} alt={this.props.altImage}
                width={this.props.imgWidth}/>
                <p style={{whiteSpace:'pre-wrap'}}>{this.props.storyContent}</p>
            </div>
        )
    }
}


