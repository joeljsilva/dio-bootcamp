import {useState, useEffect} from 'react'
import styles from './IfoodCounter.module.css'

function IfoodCounter() {
  const [value, setValue] = useState(1);
  const [estilo, setEstilo] = useState(styles.counterButtonMinusActive);

  useEffect(() => {
    document.getElementById('moeda').innerHTML = `O valor final da compra é: ` + 2.00 * value + `,00$`
  }, [value])

  const down = () => {
    if (value <= 1) {
      // Mudar o css
      setEstilo(styles.counterButtonMinusDesactive)
    } 
    if (value > 0) {
      setValue(value - 1)
    }
  }
  const up = () => {
    setValue(value + 1)
    setEstilo(styles.counterButtonMinusActive);
  }

  return (
    <div>
      <div className={styles.countexWrapper}>
        <button 
        className={estilo}
        onClick={down}
      >
        -
      </button>
      <p>{value}</p>
      <button 
        className={styles.counterButtonPlusCctive}
        onClick={up}
      >
        +
      </button>
      </div>
      
      <p id='moeda'></p>
      
    </div>
    
  )
}

export default IfoodCounter;