import {useState} from 'react';
import './styles/about.css';

function About(){
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    function showInfo(){
        setIsInfoVisible(true);
    }

    function getInfo(){
        if(isInfoVisible){
            return(
                <div className='info'>
                    <p>email: johan.barragan@uabc.edu.mx</p>
                    <p>phone: 619 456 7895</p>
                </div>
            );
        }else{
            return <p className='alert alert-warning'>Click the button to view my info</p>
        }
    }

    return(
        <div className="about">
            <h2>Johan Barragan</h2>

            {getInfo()}

            {isInfoVisible ? "" : (<button className='btn btn-sm btn-dark' onClick={showInfo}>View my contact info</button>)}

        </div>
    );
}

export default About;