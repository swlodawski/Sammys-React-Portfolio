import './Resume.css';

function Resume() {

    return(
        <div id='resumeContainer'>
            <div id='resume' className='container'>
                <div className='header'>
                    <h1>Samuel Wlodawski</h1>
                    <p>PH: 901-736-5992 Email: samwlodawski@gmail.com</p>
                </div>
                <hr />
                <div className='section'>
                    <h2>Break-Down</h2>
                    <p>I am a full stack web developer focused on building fully interactive, seemless applications. With a strong knowledge of modern technologies like JavaScript, node.js and react I can build a wide range of desired wepbages and applicatiions.</p>
                </div>
                    <div className='section'>
                        <h1>Education</h1>
                        <p>Southwest Tennessee Community College<span>2005-2008</span><br />
                        Major~Paralegal Studies</p>
                        <p>University of Memphis<span>2008-2010</span><br />
                        Major~Paralegal Studies</p>
                        <p>University of Central Florida<span>2024-2024</span><br />
                        Full-Stack Web Development Bootcaamp</p>
                    </div>
            </div>
        </div>
    )
}

export default Resume