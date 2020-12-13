import React from 'react'
import { Link } from 'react-router-dom'

export default function Details(props) {
    const id = props.match.params.id
    return (
        <div>
            <Link to="/" className="btn btn-small">Back</Link>
            detalles del item con id {id}
        </div>
    )
}
