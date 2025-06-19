import React from 'react';
import {NavLink} from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';


const NavItem = ({ page, title }) => {
    const LinkStyle = {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'none',
    }

    return (
        <div style={{ textDecoration: 'none', color: 'black', lineHeight: 2, fontWeight: '600' }}>
            <NavLink to={page} style={LinkStyle}>
                <span>{title}</span>&nbsp;
                <MdOutlineArrowForwardIos size='13' color='#1976d2' />
            </NavLink>
        </div>
    )
}

export default NavItem;