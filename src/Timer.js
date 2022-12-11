import {useEffect} from 'react'

export const Timer = (props) => {

  
    // Function timer
    useEffect(() => {
      const interval = setInterval(() => {
        if(props.play){
          props.setSecond(props.second + 1)
          if(props.second == 59){
            props.setSecond(0)
            props.setMinute(props.minute + 1)
          }
        }
      }, 1000);
  
      return () => clearInterval(interval);
    })

  return (
    <div className='float-right mt-3'>
      <h2 className='text-xl'>⏱️ {props.minute <= 9 && '0'}{props.minute}:{props.second <= 9 && '0'}{props.second}</h2>
    </div>
  )
}
