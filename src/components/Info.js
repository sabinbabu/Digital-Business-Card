import react from "react"


export default function Info(){
    return(
        <div className="info">
        <h2 className="info--about">About</h2>
        <p className="para--about">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className="info--interests">Interests</h2>
        <p className="para-interests">Food expert. Music scholar. Reader. Internet fanatic.  Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        <div className="social_media">
        <a href ="https://twitter.com/sabinacharya444" target="_blank">
            <button className="twitter" >
                <i class="fa-brands fa-twitter"></i>
            </button>
        </a>

        <a href ="https://github.com/sabinbabu" target="_blank">
            <button className="github">
                <i class="fa-brands fa-github-square"></i>
            </button>
        </a>

        <a href ="https://play.google.com/store/apps/developer?id=Binwin+Studios" target = "_blank">
            <button className="playstore">
                <i class="fa-brands fa-google-play"></i>
            </button>
        </a>           
        </div>

    </div>
    )
}