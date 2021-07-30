import React from 'react';
import style from './index.module.css';

class Modal extends React.Component {
  render() {
    const { open, close, header } = this.props;
    return (
      <div
        className={
          open ? `${style.openModal} ${style.modal}` : `${style.modal}`
        }
      >
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{this.props.children}</main>
            <footer></footer>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Modal;
