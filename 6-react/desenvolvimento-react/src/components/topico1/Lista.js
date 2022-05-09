import {useState} from 'react';
import styles from './Lista.module.css'


function Lista() {
  const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia'])

  // Adicionar itens
  const addItem = (item) => {
    setItems([...items, item])
  }  

  const removeItem = () => {
    setItems([...items.slice(0, -1)])
  }
  return (
    <div>
      <ul className={styles.lista}>
        {items.map((item) => <li>{item}</li>)}
      </ul>
      <button onClick={() => addItem('Abóbora')}>Adicionar Item</button>
      <button onClick={() => removeItem()}>Remover Item</button>
    </div>
  )
}

export default Lista;