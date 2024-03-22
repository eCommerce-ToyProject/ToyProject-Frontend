import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';


const NavItem = ({ page, title }) => {
    return (
        <li style={{ fontWeight: '600' }}>
            <Link style={{ textDecoration: 'none', color: 'black', lineHeight: 2 }} to={page}>
                <span>{title}</span>
                <MdOutlineArrowForwardIos size='13' color='#1976d2'/>
            </Link>
        </li>
    )
}

export default NavItem;