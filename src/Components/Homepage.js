import React from 'react'
import Story from './Story/Story'
import image1 from './Images/Samoyed.png'

export default function Homepage() {
    return (
        <div style={{
            height:'100vh', 
            width:'100vw', 
            background: 'linear-gradient(148deg, rgba(252,234,230,1) 0%, rgba(252,255,221,1) 100%)'}}>
            <div style={homePageStyle} id="homepage">
                <h1>Cheer of the day</h1>
                <Story 
                storyTitle={storyTitle1} 
                storyContent={storyContent1} 
                storyImage={storyImage1} 
                altImage={"A happy Samoyed dog"} 
                imgWidth={"350px"}
                style={storyStyle}
                />
            </div>
        </div>
    )
}

// Placeholder for the story, Might consider connecting it with database
const storyTitle1 = `Story Title`;
// Issue with separating paragraph
const storyContent1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit felis purus, nec interdum felis finibus nec. Pellentesque sodales dignissim ipsum a hendrerit. Donec at nisi sed odio mollis bibendum. Sed commodo sapien quis massa varius, vitae ullamcorper nunc suscipit. Etiam elementum ipsum vitae hendrerit hendrerit. Duis cursus suscipit mattis. Etiam fringilla, arcu vel interdum pellentesque, nisl ligula scelerisque enim, eget bibendum mauris nunc at est. Phasellus urna lectus, luctus vel tortor ut, semper consectetur sapien. Aenean semper pharetra massa, et cursus sem gravida in. Donec lobortis enim eget pellentesque elementum. Nullam at nisi odio. Vestibulum sed mi leo. In elementum imperdiet ultricies. Aliquam laoreet dapibus risus, eget finibus purus egestas sed. Cras id mauris rhoncus, ornare metus id, sollicitudin tellus.

Nam rutrum maximus sapien, quis scelerisque felis imperdiet et. Donec dictum est sit amet dapibus euismod. Nam in augue ac eros volutpat finibus. Aliquam ut porttitor urna, eget molestie velit. Etiam cursus faucibus turpis. Pellentesque laoreet quam porttitor urna commodo, eget sollicitudin arcu sagittis. Sed auctor erat nec neque accumsan viverra. Fusce eu vestibulum sem.`;
const storyImage1 = image1;

const homePageStyle = {
    position: 'absolute',
    //background: '#fff',
    height: '80%',
    width: '75%',
    top: '15%',
    left: '12.5%',
    overflow: 'hidden',
}

const storyStyle = {
    // position: 'relative',
    // float: 'right',
    display: 'grid',
    gridTemplateColumns: '37% auto',
    gridTemplateRows: '7% auto',
    //background: '#333',
    width: "100%",
    marginTop: '30px',
}