import './styles.scss'

function DropDown({ items, setSelectedItem, selectedItem }){

    function selectItem(e){
        const itemToSelect = items.find(item => item.sku === e.target.value)
        setSelectedItem(itemToSelect)
    }

    return(
        <div className='dropdown-wrapper'>
          <select value={selectedItem?.id} onChange={selectItem}>
            {items.map(item=>(
                <option key={item.sku} className='option' value={item.sku}>{item.sku}</option>
            ))}
          </select>
        </div>

    )
}

export default DropDown