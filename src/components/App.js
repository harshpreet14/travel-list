import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";


export default function App() {
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

  function handleClearList(){
    const confirmed = window.confirm(
      "Sure?"
    );

    if (confirmed) setItems([]);
  }

  return(
  <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handledeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items}/>
  </div>)
}




