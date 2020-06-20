import React, { Component } from 'react'

// Story for front page.
// Should include story title, image, description

export default class Story extends Component {
    render() {
        return (
            <div style={StoryTitleStyle}>
                <h1>Cheer of the day</h1>
                <h2>{this.props.storyTitle}</h2>
                <p>{this.props.storyContent}</p>
                <img src={this.props.storyImage} alt="A happy Samoyed dog"/>
            </div>
        )
    }
}

const StoryTitleStyle = {
    position: 'absolute',
    top: '10%',
    left: '10%',
}
