import React from 'react'
import {ReactComponent as ReactLogo} from '../Images/HeaderLogo 48px.svg';
import { Link } from 'react-router-dom'

// This is the header part. Please help me fix the css thanks.

export default function Header() {
    return (
        <header style={headerStyle}>
            <Link style={logoImage} to="/" className="Logo"><ReactLogo/></Link>
            <Link style={logoStyle} to="/" className="headerLink">Cheer Me Up!</Link>
            <Link style={linkStyle} to="/explore" className="headerLink">Explore</Link>
            <Link style={linkStyle} to="/search" className="headerLink">Search</Link>
            <Link style={linkStyle} to="/about" className="headerLink">About</Link>
        </header>
    )
}

/*export default function Header(){
    return (
        <div class='header' style={headerStyle}>
            <a href='/' class='logo' style={logoImage}><ReactLogo/></a>
            <a href='/' class='headerLink' style={logoStyle}>Cheer Me Up!</a>
            <div class='header-other'>
                <a href='/explore' style={linkStyle}>Explore</a>
                <a href='/search' style={linkStyle}>Search</a>
                <a href='/about' style={linkStyle}>About</a>
            </div>
        </div>
    )
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
    //paddingBottom:'60px'
}

const logoImage = {
    //padding: '10px',
    paddingTop: '30px',
    // border: '1px solid black',
    textDecoration: 'none',
    textAlign: 'center',
    transform: 'translate(5%, -50%)',
    float: 'left',
    paddingLeft:'50px'
}

const linkStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '20px',
    marginBottom: '100px',
    padding: '10px',
    paddingTop:'100px'
}

const logoStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '20px',
    padding: '10px',
    fontWeight: 'bold',
    paddingTop:'100px'
}
