
import './App.css'
import Comments from './Comments'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
 

  // creating differemt kinds of functions.
  function sum(){
    alert('clicked')
  }

  const sum2 = ()=> {
    alert('clicked2')
  }

  const sum3 = (num)=> {
    alert(num+5)
  }
  

  return (
    <>
    
      <h1>React Core Concepts Part-2</h1>

      {/* import a file which will show on UI */}
      
      
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <hr />

      <Comments></Comments>
        

      {/* How to add function in a button , in different ways */}
       
       {/* 1 */}
       <button onClick={sum}>Click-1</button>
      
       {/* 2 */}
       <button onClick={sum2}>Click-2</button>
      
       {/* 3 => parameter thakle */}
       <button onClick={ ()=>{sum3(3)} }>Click-3</button>

       {/* 4 => arrow function */}
       <button onClick={()=>{alert('clicked-4')}}>Click-4</button>
    </>
  )
}

export default App
