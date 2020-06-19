import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <Link style={logoStyle} to="/" className="headerLink">Cheer Me Up!</Link>
            <Link style={linkStyle} to="/" className="headerLink">Search</Link>
            <Link style={linkStyle} to="/" className="headerLink">About</Link>
            <Link style={linkStyle} to="/" className="headerLink">Explore</Link>
        </header>
    )
}

const headerStyle = {
    display: 'block-inline',
    background: '#FFC67A',
    height: '40px'
}

const logoStyle = {
    border: '1px solid black',
    textDecoration: 'none',
    margin: '0',
    height: '40px',
    padding: '30px 12px 5px 12px',
    fontSize: '23px'
}

const linkStyle = {
    textAlign: 'center',
    background: 'none',
    textDecoration: 'none',
    color: 'fff',
    padding: '12px',
    fontSize: '20px'
}
