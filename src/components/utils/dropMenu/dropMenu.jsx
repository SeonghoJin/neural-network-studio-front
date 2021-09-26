import React from 'react';

const DropMenu = ({ open, children }) => {
	return (
		<div
			className={`btns-group ${(open && 'active') || ''} js-more`}
			style={{
				zIndex: 100,
			}}
		>
			{children}
		</div>
	);
};

export default DropMenu;
