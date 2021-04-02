import React from 'react'

export default function Display({advice}) {
    return (
        <div style={{fontSize:"1.5rem",width:"300px",maxWidth:"calc(100% - 80px)",padding:"120px 20px",margin:"auto",textAlign:"center"}} className="glass">
            {advice}
        </div>
    )
}
