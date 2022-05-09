import styles from './ListasChaves.module.css'
const listCustomer = [
  {
    id: 1,
    name: 'Joel Silva',
    idade: 25,
    salario: 1800
  },
  {
    id: 2,
    name: 'Fulano de tal',
    idade: 25,
    salario: 1800
  },
  {
    id: 3,
    name: 'Jesus Cristo',
    idade: 2022,
    salario: 2500
  },
  {
    id: 4,
    name: 'Padre Miguel',
    idade: 43,
    salario: 2440
  },
]

function ListasChaves() {
  const renderCustomers = (customer, index) => {
    return (
      <li key={`customer -${index}`}>
        Funcionário: {customer.name} <br/>
        Identificação: {customer.id} <br/>
        Idade: {customer.idade} <br/>
        Salário: {customer.salario}
      </li>
    )
  }

  return (
    <div>
        <ul className={styles.list}>
        {listCustomer.map(renderCustomers)}
        </ul>
      </div>
  )
}

export default ListasChaves;