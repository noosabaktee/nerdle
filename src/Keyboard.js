import React from 'react'
import handleSubmit from './handleSubmit'

const Keyboard = (props) => {
        
    //Props
    let {setShowModal,setWin,rowForm,play,input,eq,setPlay,setColor,color,setAlert,setNow,now,focus,setFocus,setInput} = props
    const key = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=']

    // fungsi handle click
    const handleClick = (e) => {
        document.getElementById(focus).value = e.target.value
        input[(focus[1] - 1)] = e.target.value
        setInput(input)
        if(focus[1] != 8){
            document.getElementById(focus[0]+(parseInt(focus[1])+1)).focus()
            setFocus(focus[0] + (parseInt(focus[1]) + 1))
        }
    }

    // fungsi handle delete
    const handleDelete = () => {
        document.getElementById(focus).value = ""
        input[focus[1] - 1] = 0
        setInput(input)
    }

    // fungsi handle submit
    const submit = () => {
        handleSubmit(props)
    }

    return (
        <div className='mt-2 text-center'>
            {key.map((i) =>
                <React.Fragment key={i}>
                    {i == '+' && 
                        <br/>
                    }
                    <button type='button' className='btn h-8 sm:h-10 m-0.5 sm:m-1 w-[8.5%]' key={"b-"+i} value={i} onClick={(e) => handleClick(e)}>{i}</button>
                </React.Fragment>
            )}
            <button id='submit-btn' className='btn h-8 sm:h-10 m-0.5 sm:m-1 w-[22%] sm:w-[21%] ' onClick={submit}>Enter</button>
            <button id='delete-btn' className='btn h-8 sm:h-10 m-0.5 sm:m-1 w-[22%] sm:w-[21%] ' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Keyboard