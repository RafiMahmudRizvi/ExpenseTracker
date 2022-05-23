import React from 'react'

const TransactionList = ({transactionList}) => {

      const list = transactionList.map((item, index)=>{
      if(index>0){ 
        return(
            <li className={item.transactionAmount >= 0 ?"plus" : "minus"} key={index}>
            {item.transactionText} <span>${Math.abs(item.transactionAmount)}</span>
            
            </li> 
          )

      }
      
      })
      return (
        <>
        <h3>History</h3>
          <ul  className="list">
            {
              list
            }
      
          </ul>

        </>
      )
}

export default TransactionList
// return(
//   <li className="plus" key={index}>
//   {item.transactionText} <span>+${item.transactionAmount}</span><button className="delete-btn">x</button>
//   </li> 
// )

// if (item.transactionAmount >= 0) {
//   return(
//     <li className="plus" key={index}>
//     {item.transactionText} <span>+${item.transactionAmount}</span><button className="delete-btn">x</button>
//     </li> 
//   )
// }else{
//   return(
//   <li className="minus" key={index}>
//     {item.transactionText} <span>-${Math.abs(item.transactionAmount)}</span><button className="delete-btn">x</button>
//   </li> 
//   )
// }