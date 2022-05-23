import React, { useState } from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [yourBalance, setYourBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [transactionList, setTransactionList] = useState([
    {
        transactionText: 'No Transaction',
        transactionAmount: 0
    }
  ]);
  
  const addNewTransaction = (e)=>{
    e.preventDefault(); 
    const newAmount = Number(amount)
    setTransactionList((prev)=>{
      return(
        [
          ...prev,
          {
            transactionText: text,
            transactionAmount: newAmount
          }
        ]
      )
    })
    
    if(newAmount>=0){
      
      setYourBalance((p)=> {return(p + newAmount)})
      setIncome((p)=> {return(p + newAmount)})
    }else{
      setYourBalance((p)=> p + newAmount)

      setExpenses((p)=> p + newAmount)
    }


  }

  


  return (
    <div >
      <Header />
      <div className="container">
        <Balance 
          yourBalance={yourBalance}

        />


        <IncomeExpenses 
            income={income}
            expenses={expenses}
        />


        <TransactionList 
          transactionList={transactionList}
        />

        <AddTransaction  
         text={text}
         setText={setText}
         amount={amount}
         setAmount={setAmount}
         addNewTransaction={addNewTransaction}
        />
      </div>
    </div>
  );
}

export default App;
