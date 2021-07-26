import React from 'react';
import style from './dropMenu.module.css';

class DropMenu extends React.Component {
    render() {
        const { open } = this.props;
        return (
            <>
                {open ? (
                        <div className={style.dropMenu}>
                            {this.props.children}
                        </div>
                    ): null}
            </>
        )
    }
}

export default DropMenu;