import React from 'react'
import {Link} from 'react-router-dom'

function Banner({title,className,children,subtitle,subchildren}){
    return (
        <div className={className}>
                <p className="h1">{title}</p>
                <p className="h2">{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner
