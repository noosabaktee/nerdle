import {useEffect} from 'react'

export const Alert = (props) => {
  useEffect(()=>{
    setTimeout(function() {
      props.setMessage(false)
    }, 3000);
  }, [props.message])
  
  return (
    <div id='message' className={`bg-black text-white text-center opacity-100 fixed z-100 bottom-0 inset-x-0 py-2 scale-100`}>Tebakan anda tidak bisa dihitung!</div>
  )
}
