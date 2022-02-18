import { useState, KeyboardEvent } from "react"
import * as C from "./Styles"

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter}: Props) => {

    const [inputText, setInpuText] = useState('');
    
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInpuText('')
        }
    }
    
    return(
        <C.Container>
            <div className="image">+</div>
            <input type="text" 
            name="" 
            id="" 
            placeholder="Adicione uma tarefa"
            value={inputText}
            onChange={e=>setInpuText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}