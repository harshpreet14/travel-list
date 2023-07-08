export default function Stats({items}){
    if (!items.length) return (<p className="footer">
      <em>Start adding some items to your packing list.</em> 
    </p>);
    
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const x= Math.round((numPacked/numItems)*100);
  
    return(
      <footer className="stats">
        <em>
          {x === 100? 'You got everything ready to go! 🏖️': ` 💼You have ${numItems} items on your list, and you have already packed ${x}%` }</em>
      </footer>
      
    )
  }