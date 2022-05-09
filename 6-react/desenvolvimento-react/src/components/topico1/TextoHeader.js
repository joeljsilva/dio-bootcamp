import styles from './TextoHeader.module.css'

function TextoHeader() {
  return (
    <header className={styles.textHeader}>
      <h1>Lista Supermercado</h1>
      <p>Aula sobre Estilização em React</p>
    </header>
  )
}

export default TextoHeader;