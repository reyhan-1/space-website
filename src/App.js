
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, MemoryRouter, Link, Route } from 'react-router-dom'
import Footer from './components/Footer'
import useSound from 'use-sound';
import boopSfx from '../src/click.mp3';
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tween from 'rc-tween-one';
import TextLoop from 'react-text-loop';
import cxs from 'cxs-components';
import { useGesture } from 'react-use-gesture';



const Parallax__content__myicons__git = () => {
  const [play] = useSound(boopSfx);
    return <FontAwesomeIcon icon={['fab', 'github']} className='Parallax__content__myicons' onClick={play}/>;
};

const Parallax__content__myicons__linkedin = () => {
  const [play] = useSound(boopSfx);
    return <FontAwesomeIcon icon={['fab', 'linkedin']} className='Parallax__content__myicons' onClick={play}/>;
};

const Parallax__content__myicons__insta = () => {
  const [play] = useSound(boopSfx);
    return <FontAwesomeIcon icon={['fab', 'instagram']} className='Parallax__content__myicons' onClick={play}/>;
};


function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  library.add(fab, faInstagram, faLinkedin, faGithub);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
   
        <div className="Parallax__content">

          <div className="Parallax__content__heading">
            
            <div  className="Parallax__content__heading2__text">
              <li className="Parallax__content__myicons">
              <span><a href="https://github.com/reyhan-1" target="myTab">
              <Parallax__content__myicons__git/></a> </span></li>

              <li className="Parallax__content__myicons">
              <span><a href="https://www.linkedin.com/in/reyhan-uyanik" target="myTab">
              <Parallax__content__myicons__linkedin/></a></span></li>

              <li className="Parallax__content__myicons">
                <span><a href="https://www.instagram.com/uyanikre" target="myTab">
                <Parallax__content__myicons__insta/></a></span></li>

              <li className="Parallax__content__li"> 
                <a href="mailto:reyhanuyanik@icloud.com" >email</a></li>
                
            </div>
            
            <div className="Parallax__ufo" /> 
            <div  className="Parallax__content__heading__text">
            <h1>Reyhan Uyanik</h1>
        
            </div> 
            
            <div className="Parallax__content__heading__who">
            <TextLoop>
                <text> Senior Software Engineering Student</text>
                <text> Skywatching Enthusiast</text>
                <text> Horseback Rider</text>
              </TextLoop>
            </div>  
           
           
      

            <div className="Parallax__content__cta__he" ><h1> Welcome to my personal page!</h1>
            <p style={{fontFamily: 'Lato', textAlign: 'left'}}> I am Reyhan Uyanik. 
            I was born in Michigan, USA in 1997. 
            I currently live in Ankara. 
            I will be graduating  from Bilkent University in May 2021.
            In summer 2020 I was summer intern at Ekin Technology. I worked as a Full Stack Developer.
            After my internship I started working as a part time software engineer at Ekin Technology in Artificial Intelligence team.
            
            {"  "}
            <p> I am passionate about design, 2D & 3D animations and development. I am driven by the learning experience of a project rather than its scale. 
              My goal is creating a successful project.
              I believe good ideas combined with passion yileds the best result.</p>

              </p>
           
            </div>     
          </div>

          
  
        </div>

        
        <div className="Parallax__new-section">
          <div className="Parallax__new-section__heading">
            <h1 className="Parallax__new-section__heading__text">
              Activities</h1>
              <div className="Parallax__img">
              <div className="Parallax__michigan" style={{ transform: `translateY(${offsetY * 0.05}px)` }}/>
              <div className="Parallax__img"><div className="Parallax__bilkent" style={{ transform: `translateY(${offsetY * 0.05}px)` }}/>
              <div className="Parallax__img"><div className="Parallax__ekin" style={{ transform: `translateY(${offsetY * 0.05}px)` }}/>
              <div className="Parallax__img"><div className="Parallax__losev" style={{ transform: `translateY(${offsetY * 0.05}px)` }}/>
</div></div>
                 </div>
          </div>
         
              <div className="Parallax__new-section__content"> 
              Part Time Software Engineer at 
              <li className="Parallax__new-section__li">
                <a href="https://ekin.com/" style={{ color: 'red' }} target="myTab"> Ekin Technology</a></li> 
                <div>
                <div className="Parallax__new-section__timeline__start"> September 2020  </div>  
                <div className="Parallax__new-section__timeline__end"> March 2021  </div>  
                </div>
              </div> 
         

              <div className="Parallax__new-section__content"> 
              Summer intern at<li className="Parallax__new-section__li">
                <a href="https://ekin.com/" style={{ color: 'red' }} target="myTab"> Ekin Technology</a></li>   
                <div>
                <div className="Parallax__new-section__timeline__start"> August 2020  </div>  
                <div className="Parallax__new-section__timeline__end"> September 2020  </div>  
                </div>
              </div> 
              
              <div className="Parallax__new-section__content"> 
              Computer Science Student at<li className="Parallax__new-section__li">
                <a href="https://w3.bilkent.edu.tr/bilkent/" style={{ color: 'red' }} target="myTab"> Bilkent University</a></li>   
                <div>
                <div className="Parallax__new-section__timeline__start"> September 2016  </div>  
                <div className="Parallax__new-section__timeline__end"> May 2021  </div>  
                </div>
              </div> 
              <div className="Parallax__new-section__content"> 
              Volunteer at <li className="Parallax__new-section__li">
                <a href="https://www.losev.org.tr/v6" style={{ color: 'red' }} target="myTab"> Lösev</a></li>   
                <div><div className="Parallax__new-section__timeline__start"> January 2015  </div><div className="Parallax__new-section__timeline__end"> Now  </div>    </div>
              </div> 
 
          </div>

          <div className="Parallax__new-section__content" style={{ fontFamily: 'Acme', textAlign: 'center' }}> 
              You can find detailed info on my resume<a href="https://drive.google.com/file/d/1kwxjfQKXHmeTsPw2b6PkfoksJsBx6ICo/view?usp=sharing" style={{ color: 'red' }} target="myTab" > here </a></div>
        </div>


        <div className="Parallax__technologies">
        <h1 className="Parallax__technologies__heading">
              Technologies & Skills</h1>
              <div className="Parallax__tech__icons" >
              <div className="Parallax__circle">
              <div className="Parallax__three"> </div> </div>
              
              <div className="Parallax__circle">
              <div className="Parallax__react"> </div> </div>
              <div className="Parallax__circle">
              <div className="Parallax__mongo"> </div> </div>
              
              <div className="Parallax__circle">
              <div className="Parallax__css"> </div> </div>
              <div className="Parallax__circle">
              <div className="Parallax__html"> </div> </div>
              <div className="Parallax__circle">
              <div className="Parallax__js"> </div> </div>
              <div className="Parallax__circle">
              <div className="Parallax__java"> </div> </div>
               <div className="Parallax__circle">
              <div className="Parallax__python"> </div> </div>
              </div>
            
        </div> 

     <div className="Parallax__new-section2">
          <div className="Parallax__new-section__heading"style={{ fontFamily: 'Acme', textAlign: 'center' }} >
          
              You can find my projects on my github page, including this website. Feel free to fork and use for your projects. 
              
              </div>
          
 
        </div>
  

        <div className="Parallax">
 
        <Router>
   
          <div>
            <Route />
           
            <Footer />
          </div>
        </Router>
        </div>
        
 
    </>

  );
  

  return (
    <section className="app">
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );

}

export default App;