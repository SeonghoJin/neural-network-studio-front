import React from 'react';
import style from './dropMenu.module.css';

const DropMenu = ({ open, custom, children }) => {
	return <>{open ? <div className={`${style.dropMenu} ${custom}`}>{children}</div> : null}</>;
};

export default DropMenu;
