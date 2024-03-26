import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';


const NavItem = ({ page, title }) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'black', lineHeight: 2, fontWeight: '600' }} to={page}>
            <span>{title}</span>&nbsp;
            <MdOutlineArrowForwardIos size='13' color='#1976d2' />
        </Link>
    )
}

export default NavItem;