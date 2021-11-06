import React, {useState, useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Input } from '@mui/material';
import { getDatabase, ref, onValue} from "firebase/database";



function SearchBar({firebaseapp}){
    const [text, setText] = useState("")
    let data = {}
    
    useEffect(() => {
        const db = getDatabase(firebaseapp)
        const currRef = ref(db, "/")
        onValue(currRef, (snapshot) => {
            data = snapshot.val()
        })
    
        for (const key in data){
            if (key.charAt(0) in data){
                data[key.charAt(0)].push(key)
            } else{
                data[key.charAt(0)] = [key]
            }
        } 

    })
    

    function textChange(e){
        const newText = e.target.value
        setText(newText)
        const results = autocomplete(newText)
        console.log(results)
    }

    function autocomplete(str) {
        const t = str.toUpperCase()
        return data[t.charAt(0)].slice(6)
    }

    return (
        <>
            <Input value={text} placeholder='Type class here (Math208, cse 142, ...)' onChange={textChange}>
            </Input>
        </>
    )
}

export default SearchBar;