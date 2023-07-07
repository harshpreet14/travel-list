import { useState } from "react";
import "./index.css"

function App() {
  const [items, setItems] =useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }
  
  function handledeleteItem(id){
    setItems(items=>items.filter(item=>item.id !== id));
  }

  function handleToggleItem(id){
    setItems(items => items.map(item => item.id ===id ? {...item, packed: !item.packed } : item))
  }

  return(
  <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handledeleteItem} onToggleItems={handleToggleItem}/>
    <Stats/>
  </div>)
}

function Logo(){
  return<h1>🌴 Far Away 💼</h1>
}

function Form({onAddItems}){

  const [description, setDescription] = useState("");
  const [quantity, setQuantity ] =useState(1);
  


  function handleSubmit(e){ 
    e.preventDefault();
    //to get the data from form, from the event object
    //we use controlled elements
    if(!description) return;

    const newItem = {description, quantity, packed:false, id: Date.now()}

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);   

  }

  return(
    <form className="add-form" onSubmit={(e)=>handleSubmit(e)}>
      <h3>What do you need for your trip? </h3>
      <select 
      type="number" 
      value={quantity} 
      onChange={(e)=>setQuantity(e.target.value)}>
        {Array.from({length:20}, (_,i)=> i+1).map((num)=>(
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
      type="text"
      placeholder="Item..."
      value={description} 
      onChange={(e)=>setDescription(e.target.value)}>      
      </input>
      <button>Add</button>
    </form>
  )
}

function PackingList({items, onDeleteItem, onToggleItems}){
  return(
    <div className="list">
      <ul className="list">
        {items.map((itemObj) => <Item onDeleteItem = {onDeleteItem} onToggleItems={onToggleItems}itemObj={itemObj} key={itemObj.id}/>)}
      </ul>
    </div>
  )
}

function Item({itemObj, onDeleteItem, onToggleItems}){
  return(
    <li>
      <input type="checkbox"value={itemObj.packed} onChange={()=> onToggleItems(itemObj.id)}/>
      <span style={itemObj.packed? {textDecoration:"line-through"}: {}}>
      {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={()=> onDeleteItem(itemObj.id)}>❌</button>     
    </li>   
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>Only one item is packed.</em>
    </footer>
    
  )
}

export default App;
