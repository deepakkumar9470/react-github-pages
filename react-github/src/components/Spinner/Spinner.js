import React from 'react'

import './Spinner.scss'


const Spinner = () => {
    return (
        <React.Fragment>

            <div className="loader-wrapper">
                <div className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>
            </div>

            <div className="loader2">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>
                <div className="loader3">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>
            
        </React.Fragment>
    )
}

export default Spinner
