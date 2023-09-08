import React from 'react'
import handleSubmit from './handleSubmit'
export const Form = (props) => {
    //Fungsi handle key down
    const keyDown = (e) =>{
        if(e.keyCode == 13){
            handleSubmit(props)
        }
    }

    //Fungsi untuk mengubah isi value
    const change = (e) => {
        // Jika sudah ada valuenya maka ganti dengan value baru karena input tidak boleh disini lebih dari 1 karakter
        if(e.target.value.length != 0){
            e.target.value = e.target.value[e.target.value.length - 1]
        }
        //Mengganti input yang memiliki key = k dengan value baru
        props.input[(e.target.id[1] - 1)] = e.target.value
        props.setInput(props.input)
        // Ganti fokus ke kolom berikutnya
        if(e.target.value != ""){ // Jangan ganti jika ingin menghapus bukan mengisi 
            if(e.target.id[1] != 8){
                document.getElementById(e.target.id[0]+(parseInt(e.target.id[1])+1)).focus()
            }
        }
    }

    // Agar cursor selalu ada diakhir input
    const focus = (e) => {
        let value = e.target.value
        e.target.setSelectionRange(value.length, value.length)
        e.target.focus()
        props.setFocus(e.target.id)
    }

    return (
        <div>
            <form className='text-center'>
                {props.rowForm.map((i) => 
                    <div id={"form-"+i} key={"form-"+i}>
                        {props.colForm.map((j) => 
                            <input className='cursor-pointer value h-10 sm:h-14 m-0.5 sm:m-1 w-[11%] sm:w-[11%] text-transparent text-shadow text-center text-2xl bg-green-500 rounded font-medium' key={i+j} onKeyDown={(e) => keyDown(e)} onChange={(e) => change(e)} id={i+j} disabled={props.now === i ? false : true} onClick={(e) => focus(e)} inputMode={'none'} style={{animation: `fadeInAnimation ease ${2+j/10}s`}}/>
                        )}
                        <br/>
                    </div>
                )}
            </form>
        </div>
    )
}
