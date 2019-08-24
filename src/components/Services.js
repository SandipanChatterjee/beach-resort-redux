import React from 'react'
import {FaBeer,FaShuttleVan,FaHiking,FaCocktail} from 'react-icons/fa'
const Services = () => {
    return (
        <div style={{backgroundColor: '#CFCFCF'}}>
           <p className="title">services</p>
            <div className="section-items">
               <div style={{marginRight: 15}}>
                    <FaCocktail className="fas fa-cocktail" style={{color: '#AF9A7D', fontSize: '2em', display: 'flex', justifyContent: 'center'}} />
                    <p style={{textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 3, textAlign: 'center', marginTop: '20%', marginBottom: '20%'}}>free cocktails</p>
                    <p style={{textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. 
                        Cras semper auctor neque vitae
                    </p>
                </div>
                <div style={{padding: 10}}>
                    <FaHiking className="fas fa-hiking" style={{color: '#AF9A7D', fontSize: '2em', display: 'flex', justifyContent: 'center'}} />
                    <p style={{textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 3, textAlign: 'center', marginTop: '20%', marginBottom: '20%'}}>endless hiking</p>
                    <p style={{textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. 
                        Cras semper auctor neque vitae
                    </p>
                </div>

               <div style={{padding: 10}}>
                    <FaShuttleVan className="fas fa-shuttle-van" style={{color: '#AF9A7D', fontSize: '2em', display: 'flex', justifyContent: 'center'}} />
                    <p style={{textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 3, textAlign: 'center', marginTop: '20%', marginBottom: '20%'}}>free shuttle</p>
                    <p style={{textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. 
                        Cras semper auctor neque vitae
                    </p>
                </div>

                <div style={{padding: 10}}>
                    <FaBeer style={{color: '#AF9A7D', fontSize: '2em', display: 'flex', justifyContent: 'center'}} />
                    <p style={{textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 3, textAlign: 'center', marginTop: '20%', marginBottom: '20%'}}>strongest beer</p>
                    <p style={{textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. 
                        Cras semper auctor neque vitae
                    </p>
                </div>
            </div>
        </div>  
    )
}

export default Services
