
function InputControl({onOrderChange, onClear, onAddItem}) {

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

  return (
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
  
  )
}