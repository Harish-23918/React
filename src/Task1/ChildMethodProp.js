import React from 'react'

export default function ChildMethodProp(props) {
    return (
        <div>
            <button onClick={()=>{props.getHandler("child")}}>click me</button>
        </div>
    )
}
