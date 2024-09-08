import './AboutMe.css';

function AboutMe() {

    return(
        <div>
            <div id='aboutme-container' className='container colxxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-lg-8'>
                    <h1 id='aboutMeTitle' className='display-5 fw-bold text-body-emphasis 1h-1 mb-3'>My name is Samuel, Hello!!!</h1>
                    <strong><p id='aboutMeSection' className='lead'>My name is Samuel and I am a fullstack-web developer. My profienicenies include HTML, CSS, JavaScript and node.js. With my knowledge, I could be an asset to your business</p></strong>
                </div>
                <div className='col-10 col-small-8 col-lg-6'>
                    <img id='portfolio-picture' src="src\images\Header-IMG.jpg" className='d-block mx-lg-auto img-fluid' alt="Bootstrap Themes" width="450" loading='lazy'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutMe