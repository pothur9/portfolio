
import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
    
      <div className="text-container">
        <h1 className='hero-tx'>Web&nbsp;Developer</h1>
        <p className="hero-p">
          Resolving design problems, building smart user interfaces <br/>and useful interactions, developing rich web applications, <br/>and creating seamless web experiences.
        </p>
        <p className="about">About &#10142;</p>
        <img src="icon1.png" className="icon1"/>
        <img src="icon2.png" className="icon2"/>
       
      </div>

    
      <div className="image-container">
       <img src="bg.png" alt="Web Developer" className="img"/>
        <img src="main-rb.png" alt="Web Developer" className="im"/>
       <img  src="black1.png" className="black"/>
      </div>
     
    </div>
  );
}

export default Hero;
