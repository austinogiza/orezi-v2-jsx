import ContactForm from "components/contact/ContactForm"
import ContactHero from "components/contact/ContactHero"
import React, { useEffect } from "react"



const Contact:React.FC = () => {
    
    useEffect(()=>{
document.title = "Contact Me - The Creative Mena"
    },[])
    return (
        <div>

               <ContactHero/>
               <ContactForm/>
        </div>
    )
}

export default Contact
