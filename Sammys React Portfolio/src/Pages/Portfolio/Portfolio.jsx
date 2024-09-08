import './Portfolio.css';

function Portfolio() {

    return(
        <div>
            <img id='Astrolab' src="src\images\Header-IMG.jpg" alt="Astrolab" />
            <div id='projects' className='album py-5 bg-body-tertiary'>

                <div className='container'>

                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <img src="src\images\zenGarden.jpg" alt="Peaceful Garden" />
                            <div className='card-body'>
                                <p className='card-text'>zenGarden Project Using node.js, express,js, sequelize, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' type='submit'><a href="https://github.com/Group-One-FSF-Project-2/zenGarden">View</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <img src="src\images\MeCommerce.jpg" alt="E Commerce Photo" />
                            <div className='card-body'>
                                <p className='card-text'>MeCommerce Challenge Using node.js, express,js, sequelize, RESTful API's, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' type='submit'><a href="https://github.com/swlodawski/ME-Commerce-Site">View</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card shadow-sm'>
                            <img src="src\images\SVG-Generator.png" alt="Generic SVG Shape Picture" />
                            <div className='card-body'>
                                <p className='card-text'>SVG Generator Challenge Using node.js, jest, JavaScript, ect</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' type='submit'><a href="https://github.com/swlodawski/sammys-svg-generator">View</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                    <div className='card shadow-sm'> 
                        <img src="src\images\outLets.jpg" alt="Events Picture" />
                        <div className='card-body'>
                            <p className='card-text'>outLets Project Using HTML, CSS, JavaScript, the SeatGeek API, ect.</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='btn-group'>
                                    <button id='viewbutton' className='btn btn-primary w-100 py-2 alignt-items-center' type='submit'><a href="https://github.com/fsfgroup8/OUTlets">View</a></button>
                                </div>
                            </div>
                        </div>
                    </div>   
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Portfolio