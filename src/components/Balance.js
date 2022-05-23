import React from 'react'

const Balance = ({yourBalance}) => {
  return (
    <>
        <h4>YOUR BALANCE</h4>
        <h1>{yourBalance<0 && '-'}${Math.abs(yourBalance)}</h1>
    </>
  )
}

export default Balance