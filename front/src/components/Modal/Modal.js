import styles from './modal.module.css'
function Modal({active, setActive, children}) {

  return (
    <div className={styles.modalBackground}>
      <button onClick={() => {setActive(false)}}>close</button>
    </div>

  )
}

export default Modal
