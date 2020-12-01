import React from 'react'

export default function ListRenderDisplay({person}) {
    return (
        <div>
            <h2>i am {person.name}, i was {person.age} yrs old and i know {person.skill}</h2>
        </div>
    )
}
