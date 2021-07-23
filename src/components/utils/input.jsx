import React from 'react';
import style from './default.module.css';

export class BorderInput extends React.PureComponent {
    render() {
        const { type, placeholder } = this.props;
        return (
            <div className={style.inputWrapper}>
                <input type={type} placeholder={placeholder} />
                {this.props.children}
            </div>
        )
    }
}