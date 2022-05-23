import React from 'react'

const IncomeExpenses = ({income, expenses}) => {
  return (
    <div className='inc-exp-container'>
      <div className="income">
          <h4>INCOME</h4>
          <p className='money plus'>+${income}</p>
      </div>
      <div className="expence">
          <h4>EXPENSE</h4>
          <p className='money minus'>-${Math.abs(expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses