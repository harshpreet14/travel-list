import "./index.css"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return(
  <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>)
}

function Logo(){
  return<h1>🌴 Far Away 💼</h1>
}

function Form(){

  function handleSubmit(e){
    e.preventDefault();
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select>
        {Array.from({length:20}, (_,i)=> i+1).map((num)=>(
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  )
}

function PackingList(){
  return(
    <div className="list">
      <ul className="list">
        {initialItems.map((itemObj) => <Item itemObj={itemObj} key={itemObj.id}/>)}
      </ul>
    </div>
  )
}

function Item({itemObj}){
  return(
    <li>
      <span style={itemObj.packed? {textDecoration:"line-through"}: {}}>
      {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>     
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
