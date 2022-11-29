import React from 'react'

export const Form = (props) => {
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

    return (
        <div>
            <form>
                {props.rowForm.map((i) => 
                    <div id={"form-"+i} key={"form-"+i}>
                        {props.colForm.map((j) => 
                            <input className='value' key={i+j} onChange={(e) => change(e)} id={i+j} disabled={props.now === i ? false : true} onFocus={(e) => props.setFocus(e.target.id)} inputMode={'none'}/>
                        )}
                        <br/>
                    </div>
                )}
            </form>
        </div>
    )
}
