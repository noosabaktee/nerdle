const equation = () => {
    const operation = ["+","-","*","/"]
    let text = ""
    let value = ""
    //Paksa agar selalu 8 karakter
    while(value.length != 8){
        let result = 0
        //Paksa agar hasilnya 0 < x < 100 dan hasilnya bertipe bukan float (integer)
        while(result <= 0 || result >= 100){
            text += Math.floor(Math.random() * 99) + 1 // Random integer dari 1 - 99
            text += operation[Math.floor(Math.random() * 4)]
            //kita ingin agar operasi lebih sering memiliki 3 operasi, maka kita usahan untuk memilih 1 angka setelah operasi pertama agar ada ruang untuk operasi ke 2
            if(Math.floor(Math.random() * 99) + 1 == 1){
                text += Math.floor(Math.random() * 99) + 1
            }else{
                text += Math.floor(Math.random() * 9) + 1
            }
            //jika jumlah karakter masih ada 4 atau kurang maka kita masih bisa menambahkan satu operasi lagi 
            if(text.length <= 4){
                text += operation[Math.floor(Math.random() * 4)]
                text += Math.floor(Math.random() * 99) + 1
            }
            result = eval(text)
            value = text + "=" + result
            text = ""
        }
    }
    return value
}

const validation = (input, setMessage) => {
    // Ubah persamaan menjadi list dengan pemisah "="
    let split = input.split("=")

    // Ini pake try catch karena jika memasukkan nilai 0 setelah tanda operasi maka akan terjadi error pada fungsi eval
    try{
        eval(split[0])
    }catch(e){
        return setMessage("Tidak boleh diawali dengan angka 0!")
    }

    if(!input.includes("=")){
        return setMessage('Tebakan harus mengandung "="!')
    }

    if(input.replace(" ","").length != 8){
        return setMessage("Kolom harus terisi semua!")
    }
    
    if(eval(split[0]) != parseInt(split[1])){
        return setMessage("Hasil dari tebakan anda salah!")
    }

    return true

}

const correct = (equation,inputUser) => {
    let res = [0,0,0,0,0,0,0,0]
    let eq = equation.split("")
    let input = inputUser.split("")
    
    // pilih karakter yang tepat, kemudian ganti res dengan angka 2 dan rubah listnya dengan string kosong
    for(const [k,v] of input.entries()){
        if(input[k] == eq[k]){
            res[k] = 2
            eq[k] = ""
            input[k] = ""           
        }
    }
            
   // pilih karakter yang mirip satu persatu dari input ke equation, 
    for(const [k,v] of input.entries()){
        for(const [i,j] of eq.entries()){
            //Jika value input sama dengan value inputput maka ganti res ke-k dengan angka 1 dan ubah input ke-k dan equation ke-i dengan string kosong agar tidak terdeteksi lagi, makanya dibawah menggunakan syarat v != "" artinya string kosong jangan dihirung kemiripannya karena didalam list sudah banyak string kosong
            if(v == j && v != ""){
                res[k] = 1
                input[k] = ""
                eq[i] = ""
            }
        }
    } 
    return res
}

export {equation, validation, correct}