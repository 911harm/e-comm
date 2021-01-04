import React from 'react'
import Items from '../components/Items'
import MultiCarousel from '../components/MultiCarousel'

export default function Home() {
    return (
        <React.Fragment>
            <MultiCarousel></MultiCarousel>
            <Items></Items>
        </React.Fragment>
    )
}
