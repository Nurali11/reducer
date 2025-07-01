import { useReducer } from "react"

function reducerFn(state:{list:Array<string | null>}, action:{type:"Create", data:string | null}){
  switch(action.type){
    case "Create": {
      return {
        list:[...state.list, action.data]
      }
    }
    default:{
      return state
    }
  }
} 

const App = () => {
  const [createData, dispatch] = useReducer(reducerFn, {list:[]})
  function handleBtnClick(){
    let newValue = prompt("Nimadir kiriting")
    dispatch({type:"Create", data:newValue})
  }
  return (
    <>
      <button onClick={handleBtnClick}>Click</button>
      {createData.list.map((item:string | null, index:number) => <p key={index}>{item}</p>)}
    </>
  )
}


export default App