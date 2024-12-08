import { useDispatch, useSelector } from "react-redux"
import { fuhadShiblu_minus, fuhadShiblu_plus } from "../Slices/CounterSlice"

const Home = () => {
     const data = useSelector((state)=>state.fuhadShiblu_counter.fuhadShiblu_value)
     const dispatch = useDispatch()
     const handleRemove = ()=>{
          if(data <= 1){
               alert(`Value isn't less than 1`)
          }else{
               dispatch(fuhadShiblu_minus())
          }
     }
     const handleAdd = ()=>{
          if(data >= 10){
               alert(`Value isn't more than 10`)
          }else{
               dispatch(fuhadShiblu_plus())
          }
     }
     
  return (
    <>
      <div className="flex h-screen justify-center items-center gap-10">
      <button onClick={handleRemove} className='text-xl font-black text-white bg-black p-5 rounded-xl uppercase active:scale-[1.1] transition-all'>remove</button>
      <p className="text-xl text-white bg-black rounded-full font-black p-5">{data}</p>
      <button onClick={handleAdd} className='text-xl font-black text-white bg-black p-5 rounded-xl uppercase active:scale-[1.1] transition-all'>add</button>
    </div>
    </>
  )
}

export default Home