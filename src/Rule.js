import React from 'react'

export const Rule = (props) => {
    return (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="mx-auto max-w-xl relative">
            {/*content*/}
            <div className="border-0 w-[22rem] sm:w-[30rem] p-2 rounded-lg shadow-lg bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="absolute right-2">
                <button onClick={() => props.setShowRule(false)}>❌</button>
                </div>
                {/*body*/}
                <div className="p-2 mt-1">
                    {/* How to play */}
                    <p className='font-semibold text-lg text-center'>Cara Bermain Nerdle</p>
                    <p>Tebak NERDLE dalam 6 percobaan. Setelah setiap tebakan, warna ubin akan berubah untuk menunjukkan seberapa dekat tebakan anda dengan solusinya</p>
                    
                    {/* Rule */}
                    <p className='font-semibold text-lg mt-2 text-center'>Aturan</p>
                    <div className='pb-3'>
                    - Setiap tebakan adalah perhitungan <br/> 
                    - Anda dapat menggunakan 0 1 2 3 4 5 6 7 8 9 + - * / atau = <br/>
                    - Harus mengandung satu "=" <br/>
                    - Hanya boleh memiliki angka di sebelah kanan "=", bukan perhitungan lain <br/>
                    - Urutan operasi standar berlaku, jadi hitung * dan / sebelum + dan - misalnya 3+2*5=13 bukan 25 <br/>
                    - Jika ubin berwarna hijau artinya tebakan ada di solusi dan diposisi yang benar <br/>
                    - Jika ubin berwarna merah muda artinya tebakan ada di solusi tetapi dalam posisi yang salah <br/>
                    - Jika ubin bewarna hitam artinya tebakan tidak ada disolusi
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
