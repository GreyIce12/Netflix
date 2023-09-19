import React, { useEffect, useState } from 'react'
import "./Nav.css"

function NavBar() {

    const [show,handleShow ] = useState(false);

    const transitionNavbar = ()=>{
        if(window.scrollY >100){
            handleShow(true);
        } else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, []);

  return (

    <div className={`nav ${show && "nav_black"}`}>

        <div className="nav_contents"> 
            
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
            <img className='nav_avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="avatar" />
            

        </div>

    </div>
  )
}

export default NavBar