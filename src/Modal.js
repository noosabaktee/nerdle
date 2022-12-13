import React from "react";

export const Modal = (props) => {
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
              <button onClick={() => props.setShowModal(false)}>❌</button>
            </div>
            {/*body*/}
            <div className="text-center p-1">
                <p className="font-bold text-lg mb-2">{props.win == 1 ? 
                  <span className="text-green-500">YOU WON!!!</span>
                : <span className="text-red-500">YOU LOSE!!!</span>}</p>
                {Object.entries(props.color).map(([k,v]) =>
                  v.map((color,index) => {
                    let bg = props.colorList.black
                    if(color == 2){
                        bg = props.colorList.green
                    }else if(color == 1){
                        bg = props.colorList.pink
                    }
                    return <div key={`modal-${k}${index}`} id={`modal-${k}${index}`} className="inline-block w-[11.5%] h-9 sm:h-12 m-px text-center text-white text-center rounded" style={{backgroundColor: bg }}></div>
                  }) 
                )}
                <p className="font-semibold">Time: {props.minute}m {props.second}s</p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}