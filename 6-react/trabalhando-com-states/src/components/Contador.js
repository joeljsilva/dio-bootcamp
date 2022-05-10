import {useState} from 'react'
import styles from './Contador.module.css'
import { FaRegTrashAlt } from 'react-icons/fa';


function Contador(){
  const [number, setNumber] = useState(0);
  const [passo, setPasso] = useState(1);

  const adicionar = () => {
    setNumber(number + parseInt(passo))
  }
  const remover = () => {
    setNumber(number - parseInt(passo))
  }
  const limpar = () => {
    setNumber(0)
    setPasso(0)
    document.getElementById('texto').value = ''
  }
  return (
    <div className="App">
     <p className={styles.resultado}>{number}</p> <br/>
     <button className={styles.button} onClick={adicionar}>Adicionar</button>
     <button className={styles.button} onClick={remover}>Remover</button> <br/><br/>
     <div className={styles.box}>
       <input id='texto' className={styles.text} onChange={(e => setPasso(e.target.value))} type='number'/>
     <button className={styles.deletar} onClick={limpar}><FaRegTrashAlt/></button>
     </div>
    </div>
  );
}

export default Contador;