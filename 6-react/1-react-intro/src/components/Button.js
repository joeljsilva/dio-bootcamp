import styles from './Button.module.css'

function Button() {
  const handleClick = () => {
    console.log('Deletar Cliente')
  }
  return (
    <button onClick={handleClick}>Deletar Cliente x</button>
  )
}

export default Button;