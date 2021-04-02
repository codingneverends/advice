import React from 'react'

export default function btn({value,action}) {
    return (
        <div>
            <button onClick={action} style={{marginLeft:"50%",transform:"translateX(-50%)",padding:"15px",whiteSpace:"nowrap",borderRadius:"10px",background:"black"}}>{value}</button>
        </div>
    )
}
