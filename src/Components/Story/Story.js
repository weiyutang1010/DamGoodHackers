import React, { Component } from 'react'

// Story for front page.
// Should include story title, image, description

export default class Story extends Component {
    render() {
        return (
            <div>
                <p style={StoryTitleStyle}>Hello World!</p>
            </div>
        )
    }
}

const StoryTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
}
