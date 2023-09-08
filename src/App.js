import './index.css';
import { useState, useEffect } from 'react';
import { Form } from './Form';
import { equation } from './Method'
import Keyboard from './Keyboard';
import { Modal } from './Modal';
import { Timer } from './Timer';
import { Alert } from './Alert';
import { Rule } from './Rule';


function App() {
    const colorList = {"green":"#398874","pink":"#820458","black":"#161803"}
    const rowForm = ['a','b','c','d','e','f']
    const colForm = ['1','2','3','4','5','6','7','8']
    const [eq,setEq] = useState(equation()) // Gunakan state agar ketika enter tidak rubah
    const [color,setColor] = useState({"a":[],"b":[],"c":[],"d":[],"e":[],"f":[]})
    const [alert,setAlert] = useState(false) // if true show alert
    const [message,setMessage] = useState(false) // message for alert
    const [win,setWin] = useState(0) // 0 = null | 1 = win | -1 = lose
    const [play,setPlay] = useState(true) 
    const [input,setInput] = useState([0,0,0,0,0,0,0,0]) // Input calculation
    const [focus,setFocus] = useState("a1") // Focus for input, col = number & row = alphabet
    const [showModal, setShowModal] = useState(false) // Modal for win
    const [showRule,setShowRule] = useState(false) // Modal for rule


    //Sekarang kita sedang berada dibaris pertama
    //Gunakan state karena kita akan merender ulang untuk enable sebuah input
    let [now,setNow] = useState(rowForm[0])


    // Timer
    const [minute,setMinute] = useState(0)
    const [second,setSecond] = useState(0)

    useEffect(() => {
        // Focus baris baru ketika ketika enter
        let focusTo = rowForm[rowForm.indexOf(now)]
        document.getElementById(focusTo+"1").focus()
        // Warna baru untuk input form
        Object.entries(color).map( ([key, value]) => {
          value.map((color,i) => {
            let bg = colorList.black
            if(color == 2){
                bg = colorList.green
            }else if(color == 1){
                bg = colorList.pink
            }
            document.getElementById(key+(i+1)).style.backgroundColor = bg
          })
        })
        // if(win == 1 || win == -1){
        //   setShowModal(true)
        // }
    }, [eq,color,alert,play,input,now,showModal])

  return (
    <div className="App flex my-3">
      <div className='w-auto mx-auto xl:w-2/5'>
        <div className='mx-2 sm:mx-1 my-3'>
          <Timer play={play} second={second} setSecond={setSecond} minute={minute} setMinute={setMinute}/>
          <div className='font-bold text-4xl inline mr-2'>nerdle</div>
          <button className='text-2xl bg-transparent' onClick={() => setShowRule(true)}>📋</button>
          { play == false &&
            <button className="text-2xl ml-1 bg-transparent" onClick={() => window.location.reload(false)}>🔄</button>
          }
        </div>
        {showRule && 
          <Rule setShowRule={setShowRule}/>
        }
        {showModal ? (
          <Modal second={second} minute={minute} win={win} color={color} colorList={colorList} setShowModal={setShowModal}/>
        ) : null}
        <div>
          <Form setShowModal={setShowModal} setWin={setWin} rowForm={rowForm} play={play} input={input} eq={eq} setPlay={setPlay} setColor={setColor} color={color} setAlert={setAlert} setMessage={setMessage} setNow={setNow} now={now} setFocus={setFocus} focus={focus} setInput={setInput} colForm={colForm}/>
          <Keyboard setShowModal={setShowModal} setWin={setWin} rowForm={rowForm} play={play} input={input} eq={eq} setPlay={setPlay} setColor={setColor} color={color} setAlert={setAlert} setMessage={setMessage} setNow={setNow} now={now} setFocus={setFocus} focus={focus} setInput={setInput}/>          
          {alert && 
          <Alert alert={alert} setAlert={setAlert} message={message}/>
          }
        </div>
        {/* Footer */}
        <footer className='text-center my-5'>
          <b>Made with ❤️ by</b> <a href='https://www.instagram.com/noosabaktee/' target={"_blank"} className='text-green-500 text-shadow'>Rama Nusa Bakti</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
