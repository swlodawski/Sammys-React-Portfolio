import './Portfolio.css';
import img1 from '../../assets/images/outLets.jpg';
import img2 from '../../assets/images/Header-IMG.jpg';
import img3 from '../../assets/images/MeCommerce.jpg';
import img4 from '../../assets/images/SVG-Generator.png';
import img5 from '../../assets/images/zenGarden.jpeg';

function Portfolio() {

    return(
        <main>
            <img id='Astrolab' src={img2} alt="Astrolab" />
            
            <div id='projects' className='album py-5 bg-body-tertiary'>
            </div> 
                <div className='container'>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <im0g src={img5} alt="Peaceful Garden" />
                            <div className='card-body'>
                                <p className='card-text'>zenGarden Project Using node.js, express,js, sequelize, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/Group-One-FSF-Project-2/zenGarden">View</a></button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <img src={img3} alt="E Commerce Photo" />
                            <div className='card-body'>
                                <p className='card-text'>MeCommerce Challenge Using node.js, express,js, sequelize, RESTful API's, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/swlodawski/ME-Commerce-Site">View</a></button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    
                    <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <img src={img4} alt="Generic SVG Shape Picture" />
                            <div className='card-body'>
                                <p className='card-text'>SVG Generator Challenge Using node.js, jest, JavaScript, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/swlodawski/sammys-svg-generator">View</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                    <div className='card shadow-sm'> 
                        <img src={img1}alt="Events Picture" />
                        <div className='card-body'>
                            <p className='card-text'>outLets Project Using HTML, CSS, JavaScript, the SeatGeek API, ect.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='btn-group'>
                                    <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/fsfgroup8/OUTlets">View</a></button>   
                            </div>
                        </div>
                    </div>   
                    </div>
                    </div>
            </section>
            </div>
        </main>

    )
}

export default Portfolio
