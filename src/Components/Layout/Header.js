import React from 'react'
import {ReactComponent as ReactLogo} from '../Images/HeaderLogo 48px.svg';
import { Link } from 'react-router-dom'

// This is the header part. Please help me fix the css thanks.

export default function Header() {
    return (
        <header style={headerStyle} id="header">
            <Link style={logoImage} to="/" className="Logo"><ReactLogo/></Link>
            <div style={{transform: 'translate(0, 15%)'}}>
            <Link style={logoStyle} to="/" className="homeLink">Cheer Me Up!</Link>
            <Link style={linkStyle} to="/explore" className="headerLink">Explore</Link>
            <Link style={linkStyle} to="/search" className="headerLink">Search</Link>
            <Link style={linkStyle} to="/about" className="headerLink">About</Link>
            </div>
        </header>
    )
}

/*export default function Header(){
    return(
        <div className="header" id='header'>
            <a href='/' className="Logo"><ReactLogo/></a>
            <div style={{transform: 'translate(0, 15%)'}}>
            <a href="/" className="homeLink">Cheer Me Up!</a>
            <a href="/explore" className="headerLink">Explore</a>
            <a href="/search" className="headerLink">Search</a>
            <a href="/about" className="headerLink">About</a>
            <a href ="javascript:void(0);" className="icon" onclick="resize()">
                <i className='burger'></i></a>
            </div>
        </div>
    )
}

function resize(){
    var x = document.getElementById("header");
    if(x.className === "headerLink"){
        x.className += "responsive";
    } else {
        x.className = "headerLink";
    }
}*/

const headerStyle = {
    //border: '1px solid black',
    position: 'fixed',
    //display: 'block-inline',
    background: '#FFC67A',
    height: '55px',
    width: '100%',
    zIndex: '1',
    paddingTop: '12px',
    boxShadow: '0 5px 6px -6px black',
}

const logoImage = {
    //padding: '10px',
    paddingTop: '30px',
    // border: '1px solid black',
    textDecoration: 'none',
    textAlign: 'center',
    transform: 'translate(5%, -45%)',
    float: 'left',
    paddingLeft:'50px'
}

const linkStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '22px',
    marginBottom: '100px',
    padding: '10px',
    paddingTop:'100px'
}

const logoStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '22px',
    padding: '10px',
    paddingLeft: '8px',
    fontWeight: 'bold',
    paddingTop:'100px'
}
