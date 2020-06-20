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

const headerStyle = {
    //border: '1px solid black',
    position: 'fixed',
    //display: 'block-inline',
    background: '#FFC67A',
    height: '55px',
    width: '100%',
    zIndex: '10',
}

const logoImage = {
    padding: '10px',
    // border: '1px solid black',
    textDecoration: 'none',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
}

const linkStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '20px',
    padding: '10px',
}

const logoStyle = {
    textAlign: 'center',
    // border: '1px solid black',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '20px',
    padding: '10px',
    fontWeight: 'bold',
}
