import React from "react";
// react props.children  이란 vue에서 slot 느낌
function Wrapper({children}) {
    const style = {
        border : '2px solid black',
        padding: '16px'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;