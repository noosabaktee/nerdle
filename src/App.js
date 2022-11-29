import './index.css';
import { useState, useEffect } from 'react';
import { Form } from './Form';
import { equation } from './Method'
import Keyboard from './Keyboard';


function App() {
    const defaultColor = "#989484"
    const colorList = {"green":"#398874","pink":"#820458","black":"#161803"}
    const rowForm = ['a','b','c','d','e','f']
    const colForm = ['1','2','3','4','5','6','7','8']
    const [eq,setEq] = useState(equation()) // Gunakan state agar ketika enter tidak rubah
    let [color,setColor] = useState({"a":[],"b":[],"c":[],"d":[],"e":[],"f":[]})
    let [message,setMessage] = useState("")
    let [win,setWin] = useState(false)
    let [input,setInput] = useState([0,0,0,0,0,0,0,0])
    let [focus,setFocus] = useState("a1")

    //Sekarang kita sedang berada dibaris pertama
    //Gunakan state karena kita akan merender ulang untuk enable sebuah input
    let [now,setNow] = useState(rowForm[0])

    //Fungsi update input untuk file Form
    // const setInput = (key,value) =>{
    //   input[key] = value
    //   console.log(input)
    // }

    useEffect(() => {
        // Warna baru untuk input form
        // Focus baris baru ketika ketika enter
        let focusTo = rowForm[rowForm.indexOf(now)]
        document.getElementById(focusTo+"1").focus()
        Object.entries(color).map( ([key, value]) => {
            for (let i = 0; i < value.length; i++) {
                let bg = "black"
                if(value[i] == 2){
                    bg = "green"
                }else if(value[i] == 1){
                    bg = "yellow"
                }
                document.getElementById(key+(i+1)).style.backgroundColor = bg
            }
        })
    }, [eq,color,message,win,input,now])
    

  return (
    <div className="App">
      <h1 className='text-center'>Nerdle</h1>
      <h2>{eq}</h2>
      <h3>{message}</h3>
      <Form input={input} now={now} rowForm={rowForm} colForm={colForm} setFocus={setFocus} setInput={setInput}/>
      <Keyboard rowForm={rowForm} win={win} input={input} eq={eq} setWin={setWin} setColor={setColor} color={color} setMessage={setMessage} setNow={setNow} now={now} setFocus={setFocus} focus={focus} setInput={setInput}/>
    </div>
  );
}

export default App;
