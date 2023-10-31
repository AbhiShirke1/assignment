import React from 'react'
import './Main.css'
import Right from './Right'
import LeftOne from './LeftOne'
import LeftTwo from './LeftTwo'
import LeftThree from './LeftThree'
import LeftFour from './LeftFour'

const Main = () => {
    return (
        <div className='mainContainer'>
            <div className="left">
                <LeftOne />

                <LeftTwo />

                <LeftThree />

                <LeftFour />
            </div>

            <div className="right">
                <Right />
            </div>
        </div>
    )
}

export default Main
