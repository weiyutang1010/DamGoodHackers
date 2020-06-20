import React from 'react'
import {ReactComponent as ReactLogo} from '../Images/HeaderLogo 48px.svg';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <Link style={logoImage} to="/" className="headerLink"><ReactLogo /></Link>
            <Link style={linkStyle} to="/" className="headerLink">Cheer Me Up!</Link>
            <Link style={linkStyle} to="/" className="headerLink">Search</Link>
            <Link style={linkStyle} to="/" className="headerLink">About</Link>
            <Link style={linkStyle} to="/" className="headerLink">Explore</Link>
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
}

const logoImage = {
    height: '32px',
    padding: '20px',
    border: '1px solid black',
    textDecoration: 'none',
    textAlign: 'center',
}

const linkStyle = {
    textAlign: 'center',
    border: '1px solid black',
    background: 'none',
    textDecoration: 'none',
    color: 'fff',
    fontSize: '20px',
    padding: '10px',
}
