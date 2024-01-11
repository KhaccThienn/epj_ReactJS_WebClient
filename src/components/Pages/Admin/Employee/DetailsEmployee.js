import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailsEmployee() {
    const { id } = useParams(); 

    useEffect(() => {

    }, [id])
    return (
        <>
            
        </>
    )
}

export default DetailsEmployee