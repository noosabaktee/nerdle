import React from 'react'
import { correct, validation } from './Method'

const Keyboard = (props) => {
        
    //Props
    let {rowForm,win,input,eq,setWin,setColor,color,setMessage,setNow,now,focus,setFocus,setInput} = props
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
        console.log(input)
    }

    // fungsi handle submit
    const handleSubmit = () => {
        // Jika sudah menang maka tidak bisa main lagi
        if(win == true){
            return false
        }
        // Sebelum pindah validasi dulu
        let valid = validation(input.join(""))
        let cor = correct(eq,input.join(""))
        if(valid){
            // Cek jawaban 
            if(!cor.includes(0) || !cor.includes(1)){
                // BENAR!!!
                // Disable input
                for (let i = 0; i < input.length; i++) {
                    document.getElementById(now+(i+1)).disabled = true
                }
                setMessage("HORE!!!!!")
                setWin(true)
            }else{
                // SALAH!!!
                // Ganti satu baris ke bawah
                if (now != 'f'){
                    let nextRow = rowForm[rowForm.indexOf(now) + 1]
                    setNow(nextRow)
                }
            }
        color[now] = correct(eq,input.join("")) 
        setColor(color)    
        }else{
            setMessage("Masih belum lengkap")
        }
        setInput([0,0,0,0,0,0,0,0])
    }

    return (
        <div>
            {key.map((i) =>
                <button type='button' key={"b-"+i} value={i} onClick={(e) => handleClick(e)}>{i}</button>
            )}
            <button id='submit-btn' onClick={handleSubmit}>enter</button>
            <button id='delete-btn' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Keyboard