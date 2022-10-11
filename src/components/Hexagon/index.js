import { useEffect } from 'react'
import { useState } from 'react'
import './styles.scss'

function Hexagon({ legend, number, fpsContent }) {
    const [count , setCount] = useState(0)
    const mainClass = fpsContent ? 'number small-number' : 'number' //fps content change classes 
    const displayFps = fpsContent ? 'fps-display-none' : 'fps'

    
    useEffect(() => { //animation number hexagon
       if(!fpsContent){
           let fps = 0
           const myInterval = setInterval(function(){
               fps++
               setCount(fps) 
               if(fps==number){
                clearInterval(myInterval)
               }
           },5) 
       }
    }, [number])


    return (
        <div className='hexagon'>
            <div className='hex'>
                <h4 className={mainClass}>
                    {fpsContent ? number : count}
                    {!fpsContent && <span>+</span>}
                </h4>
                <div className={displayFps}>FPS</div>
            </div>
            <h3 className='legend'>{legend}</h3>
        </div>
    )
}

export default Hexagon