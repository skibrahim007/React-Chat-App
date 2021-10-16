import React from 'react'
import './Infobar.css'
import {MdGroups} from 'react-icons/md'

const Infobar = ({room}) => {
    return (
        <div className="infobar-container">
            <h3><span className="infobar-icon"><MdGroups/></span>{room}</h3>
        </div>
    )
}

export default Infobar
