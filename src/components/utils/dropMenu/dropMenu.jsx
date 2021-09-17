import React from 'react';
import style from './dropMenu.module.css';
import { Link } from 'react-router-dom';

const DropMenu = ({ open, children }) => {
	return <div className={`btns-group ${(open && 'active') || ''} js-more`}>{children}</div>;
};

export default DropMenu;
