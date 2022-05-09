import styles from './Teste1.module.css'

function Teste1() {

  const textoDestaque = {
    color: 'violet',
    fontSize: '2rem',
  }


  return(
    <div>
        <h1 style={{color: 'red', fontSize: '4rem'}}>CFB Cursos</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className={styles.paragraph}>Se inscreva em nosso canal e nos siga no Instagram</p>
    </div>
  )
}

export default Teste1;