import React from 'react'

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color: color}}>
            안녕하세요 {name}
            {isSpecial && <b>*</b>}
        </div>
    )
}

export default Hello;