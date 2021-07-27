import React from 'react';
import style from './dropMenu.module.css';

class DropMenu extends React.Component {
    render() {
        const { open, color } = this.props;
        return (
            <>
                {open ? (
                        <div className={`${style.dropMenu} ${color}`}>
                            {this.props.children}
                        </div>
                    ): null}
            </>
        )
    }
}

export default DropMenu;