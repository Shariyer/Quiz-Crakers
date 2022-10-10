import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { PuzzlePieceIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-header-name'>
                <h2>Quizer'S Pro<PuzzlePieceIcon className="icon"/></h2>
                
            </div>
            <div className='nav-links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/topic'}>Topic</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;