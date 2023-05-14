import {useState} from "react";

export default function SwitchMode (){
    const [mode, setMode] = useState(document.documentElement.classList[0])

    function lightMode(){
        document.documentElement.classList.add('white')
        document.documentElement.classList.remove('dark')
        setMode(document.documentElement.classList[0])
    }
    function darkMode(){
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('white')
        setMode(document.documentElement.classList[0])
    }

    return(
        <div className="relative w-fit rounded overflow-hidden border border-slate-800 flex">
            <div className={` ${mode === 'white' ? 'bg-yellow-300' : 'bg-white dark:bg-slate-700'} cursor-pointer`} onClick={lightMode}>
                <i className={`fa-sharp fa-solid fa-sun text-yellow-600 m-2`}></i>
            </div>
            <div className={`${mode === 'white' ? 'bg-white' : 'bg-cyan-700'} cursor-pointer`}  onClick={darkMode}>
                <i className={`fa-solid fa-moon m-2`}></i>
            </div>


        </div>
    )
}

