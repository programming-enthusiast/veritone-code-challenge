import React, { useState, useEffect } from 'react'

const Order = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
}

function OrderedList() {

  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])
  const [order, setOrder] = useState(Order.ASCENDING)

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      insertItemIntoList(inputValue)
      setInputValue('')
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleOrder = e => {
    const newOrder = order === Order.ASCENDING ? Order.DESCENDING : Order.ASCENDING
    setOrder(newOrder)
  }

  const handleClear = e => {
    setItems([])
  }

  const insertItemIntoList = item => {
    const updatedItems = [...items, item]

    if (order === Order.ASCENDING) {
      updatedItems.sort()
    } else {
      updatedItems.sort().reverse()
    }

    setItems(updatedItems)
  }

  useEffect(() => {
    const sortedItems = [...items]

    if (order === Order.ASCENDING) {
      sortedItems.sort()
    } else {
      sortedItems.sort().reverse()
    }

    setItems(sortedItems)
  }, [order])

  return (
    <div className="ordered-list">
      <div className="ordered-list-control">
        <input
          className="item-input"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button className="sorting-direction" onClick={handleOrder}>{order === Order.ASCENDING ? '⬇️' : '⬆️'}</button>
        <button className="clear-button" onClick={handleClear}>CL</button>
      </div>
      <ul>
      {
        items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default OrderedList