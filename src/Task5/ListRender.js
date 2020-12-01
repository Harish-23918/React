import React from 'react'
import ListRenderDisplay from './ListRenderDisplay'

export default function ListRender() {
    const persons = [
        {
            name: 'harish',
            age: '25',
            skill: 'react'
        },
        {
            name: 'venkat',
            age: '30',
            skill: 'java'
        },
        {
            name: 'bharath',
            age: '25',
            skill: '.net'
        }
    ]
    const personsList = persons.map(person => <ListRenderDisplay person={person} />)
    return (
        <div>
            {personsList}
        </div>
    )
}
