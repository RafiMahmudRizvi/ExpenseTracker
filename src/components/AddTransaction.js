import React from 'react'

const AddTransaction = ({text, setText, amount, setAmount, addNewTransaction}) => {

  return (
    <>
    <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
          type="text"  
          placeholder="Enter text..." 
          value={text} 
          onChange={(e)=>{setText(e.target.value)}}

          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input 
          type="number"  
          placeholder="Enter amount..." 
          value={amount} 
          onChange={(e)=>{setAmount(e.target.value)}}
          />
        </div>
        <button className="btn" onClick={(e)=>{addNewTransaction(e)}}>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction