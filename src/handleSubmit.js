// fungsi handle submit
import { correct, validation } from './Method'

const handleSubmit = (props) => {
    //Props
    let {setShowModal,setWin,rowForm,play,input,eq,setPlay,setColor,color,setAlert,setNow,now} = props


    // Jika sudah menang maka tidak bisa main lagi
    if(play == false){
        return false
    }
    // Sebelum pindah validasi dulu
    let valid = validation(input.join(""), props.setMessage)
    if(!valid){
        return setAlert(true)
    }
    // console.log(input)
    let cor = correct(eq,input.join(""))
    // Cek jawaban
    if(!cor.includes(0) && !cor.includes(1)){
        // BENAR!!!
        // Disable input
        for (let i = 0; i < input.length; i++) {
            document.getElementById(now+(i+1)).disabled = true
        }
        setWin(1)
        setPlay(false)
        setShowModal(true)
        color[now] = correct(eq,input.join("")) 
        setColor(color) 
    }else{
        // SALAH!!!
        // Ganti satu baris ke bawah
        if (now != 'f'){
            let nextRow = rowForm[rowForm.indexOf(now) + 1]
            setNow(nextRow)
        }else{
            // KALAH!!!!
            setPlay(false)
            setShowModal(true)
        }
        setWin(-1)
        color[now] = correct(eq,input.join("")) 
        setColor(color) 
    }   
}

export default handleSubmit
