import { useReducer } from "react"


interface ReducerType {
  type: "INC" | "DEC"
}
interface CounterType {
  count: number
}
function reducerFn(state:CounterType, action: ReducerType) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1
      }
    case "DEC":
      return {
        count: state.count - 1
      }
    default:{
      return state
    }
  }
}

function Counter() {
  const [counter, dispatch] = useReducer(reducerFn, { count: 0 })
  
  return (
    <>
      <button onClick={() => dispatch({type:"DEC"})}>Click -</button>
      <button>{counter.count}</button>
      <button onClick={() => dispatch({type:"INC"})}>Click +</button>
    </>
  )
}

export default Counter
