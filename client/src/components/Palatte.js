import {useState} from 'react'
import { send } from "../socketApi";

function Palatte({activeColor}) {
    const [color, setColor] = useState(activeColor);
    return (
        <div className="palette">
            <input type="color" value={activeColor}
            onChange={(e)=>setColor(e.target.value)}></input>
            <button onClick={()=>send(color)}>Click</button>
            {
                color
            }
        </div>
    )
}

export default Palatte
