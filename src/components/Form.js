import { useState } from "react";
export default function Form({onAddItems}){

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
  
  