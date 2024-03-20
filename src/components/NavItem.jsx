import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';


const NavItem = ({ page, title }) => {
    const location = useLocation();

    const style = {
        backgroundColor: 'rgb(250, 250, 250)',
        fontWeight: '600'
    }

    return (
        <li style={location.pathname.split('/')[2] === page.split('/')[2] ? style : ''}>
            <Link to={page}>
                <span>{title}</span>
                <MdOutlineArrowForwardIos size='12' color='rgb(95, 0, 128)' />
            </Link>
        </li>
    )
}

export default NavItem;