import react from "react"


export default function Contact(){
    return(
        <div className="contact">
        
        <h1 className="contact--name">Sabin Acharya</h1>
        <h4 className="contact--position">Frontend Developer</h4>
        <div className="contact--buttons">
            <a href="mailto: sabinacharya444@gmail.com">
                <button className="contact--email">
                    <i class="fa-solid fa-envelope"></i>  Email
                </button>
  
            </a>
            
            <a href="https://www.linkedin.com/in/sabinacharya/" target="_blank">
                <button className="contact--linkedin">
                    <i class="fa-brands fa-linkedin"></i> Linkedin
                </button>
            </a>
  
         </div> 
        </div>
    )
}