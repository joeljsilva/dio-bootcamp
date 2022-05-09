import styles from './ManipulandoEventos.module.css'
import Mock from './Mock'
import Button from './Button'

const renderCustomers = (customer, index) => {
  return (
    <li key={`customer -${index}`}>
      Funcionário: {customer.name} <Button/><br/>
      Identificação: {customer.id} <br/>
      Idade: {customer.idade} <br/>
      Salário: {customer.salario}
    </li>
  )

}

function ManipulandoEventos() {
  const name = 'Digital Innovation One'
  
  const handleChange = (e) => {
    const {value} = e.target
    console.log(value)
  }

  const showEvent = () => {
    console.log('Evento disparado')
    alert(name)
  }

  const Button = <button onClick={showEvent}>Mostrar</button>
  return (
    <div>
        <ul className={styles.list}>
        {Mock.map(renderCustomers)}
        </ul>
        <div className="App">
          <p>Digital Innovation One</p>
          <p>Bem vindo a nossa aula.</p>
          <input onChange={handleChange}></input> <br/><br/>
         {Button}
       </div>
    </div>
  )
}

export default ManipulandoEventos;