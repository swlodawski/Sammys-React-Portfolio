import './Contact.css';

function Contact() {

    return (
        <div>
            <main id='contactForm' className='form-sigin w-50 m-auto'>
            <h1 id='contactMe' className='form-control mb-3 fw-normal'>Contact Me</h1>

            <form>
                <div className='form-floating'>
                    <input type="text" className='form-control' id='floatingInput' placeholder='Name' />
                    <label for="floatingInput">Name</label>
                </div>
                <div className='form-floating'>
                    <input type="email" className='form-control' id='floatingEmail' placeholder='name@email.com' />
                    <label for="floatingEmail">Email Address</label>
                </div>
                <div className='mb-3'>
                <label for="exampleFormControlTextarea1" className='form-label'></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder='Comment'></textarea>
                </div>
                <button id='Submit-Button' className='btn btn-primary w-100 align-items-center' type='submit'>Submit</button>
            </form>
            </main>
        </div>
    )
}

export default Contact