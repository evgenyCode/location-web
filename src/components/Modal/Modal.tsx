import React from 'react'
import styles from './Modal.module.css'

type ModalType= {
    onConfirm: ()=> void;
    onCancel: ()=> void;
}

const Modal: React.FC<ModalType> = ({onConfirm, onCancel}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.modalHeader}>
        <h2>Are you sure</h2>
        <div className={styles.closeSign} onClick={onCancel}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256" width="30px" height="30px"><g fill="#F8F0F0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path></g></g></svg></div>
        </div>
        <div className={styles.content}>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
      </div>
    </div>
  )
}

export default Modal
