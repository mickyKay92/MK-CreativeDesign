import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import logoWhite from './assets/images/mk-trans.png';
import meImage from './assets/site_assets/me.jpg';
import menu from './assets/site_assets/baseline-menu-24px.svg';
/*S.T.E.A.M Logo*/
//import steam from '../images/steam_transparent.png';
import steam4 from './assets/images/inprogress/steam/steam.jpg';
import steam2 from './assets/images/mockups/steam-mockup.png';
import steam3 from './assets/images/alt/steamvar.png';
import steam1 from './assets/images/alt/steam_modified_p.png';

/*Purpe Duck Club*/
import purpleDuck1 from './assets/images/alt/purpleduck.png';
import purpleDuck2 from './assets/images/mockups/purple2.png';
import purpleDuck3 from './assets/images/alt/purpleduck2.png';

/*Zion Stones*/
import zion1 from './assets/images/alt/zion.png';
import zion2 from './assets/images/mockups/zion-mockup.png';

/*Concentrix*/
import RAF1 from './assets/images/alt/raf.png';
import RAF2 from './assets/images/mockups/refer-mockup.png';

/*Redrock*/
import redrock1 from './assets/images/alt/redrock.png';
import redrock2 from './assets/images/alt/redrock1.png';
import redrock3 from './assets/images/alt/redrock2.png';
import redrock4 from './assets/images/alt/redrock3.png';
import redrock5 from './assets/images/alt/redrock4.png';
import redrock6 from './assets/images/alt/redrock5.png';
import redrock7 from './assets/images/alt/redrock6.png';


/*ITE*/
import ITE1 from './assets/images/alt/seal1.png';
import ITE2 from './assets/images/mockups/ite-mockup2.png';
import ITE3 from './assets/images/alt/ite.png';
import ITE4 from './assets/images/mockups/ite-mockup.png';
import ITE5 from './assets/images/alt/seal2.png';
import ITE6 from './assets/images/alt/crest1.png';

/*Others Page*/
import other1 from './assets/images/others/chester.jpg';
import other2 from './assets/images/others/studioKillers.jpg';
import other3 from './assets/images/others/galaxy.png';
import other4 from './assets/images/others/unknown.jpg';
import other5 from './assets/images/others/mj.jpg'
import other6 from './assets/images/others/wolf.jpg';
import other7 from './assets/images/others/pocket-mockup.png';
import other8 from './assets/images/others/quality-mockup.png';
import other9 from './assets/images/others/razor-mockup.png';
import other10 from './assets/images/others/purity-mockup.png';


const Steam = {image: [steam1, steam2, steam3, steam4], title: "Steam", description: "S.T.E.A.M is a daycare centre that focuses on science, technology, engineering, art and mathematics.\n The client wanted something modern and original that conveyed their core values. The client loved my initial drawings and how it immediately conveyed what they were about, It only took a few colour changes before we landed on pastel blue and grey."};
const PurpleDuck = {image: [purpleDuck1, purpleDuck2, purpleDuck3], title: "PurpleDuck", description: "Purple Duck Club is an invite-only web hosting business. Originally, I created a logo with a realistic duck but the client later decided that they wanted a fun design instead. This encouraged me to create an outline design of a cute little rubber duck and rounded font."};
const Zion = {image: [zion1,zion2], title: "Zion", description: "Zion provides a selection of stones and pebbles for various clients. I created this logo by playing about with the font and incorporating pebbles into the logo design."};
const RAF = {image: [RAF1, RAF2], title: "RAF", description: "While I was working for Concentrix, they gave me the opportunity to create a logo design for their new Refer-a-Friend campaign. Keeping to the Concentrix colours and fonts, I created this simple logo that is currently used in their internal HR communications and posters."};
const RedRock = {image: [redrock1, redrock2, redrock3, redrock4, redrock5, redrock6, redrock7], title: "RedRock", class: "pb-90", description: "This project went through a lot of changes over its lifetime. The two partners of Redrock Consultants had differing design interests, so I had to work closely with both clients to find a logo they were both happy with. Below are a list of drafts I created before landing on the final design as seen in the first image."};
const ITE = {image: [ITE1, ITE2, ITE3, ITE4, ITE5, ITE6], title: "ITE", description: "This project had a few changes in ideas throughout. Initially, it started out as a clean modern twist on the initials of the program before developing into a crest before landing on the final seal design."};
const Other = {image: [other1, other2, other3, other4, other5, other6, other7, other8, other9, other10], title: "Other", description: "Here are a few other examples of my artwork and early logo designs."};

const imageSetTest = [Steam, PurpleDuck, Zion, RAF, RedRock, ITE, Other];
function delay(callback, time) {setTimeout(callback, time);};

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            css: "closed",
            css2: "",
            test: null
        }   
    }
    mobileMenuCallback = () =>{
        if(this.state.css === "closed"){
            this.setState({
                css: "open",
                css2: "siteLogoTransition",
            });
            document.querySelector('.content').classList.add("blur", "bEvents");
        }else{
            this.setState({
                css: "closed",
                css2: "",
            });
                document.querySelector('.content').classList.remove("blur", "bEvents");
            }
        }

    altMenuCallback = () =>{
        if (this.state.css === "closed"){
            void(0);
        }else{
            this.mobileMenuCallback();
        }
    }
    mobileCallback = () =>{
        console.log('Hello');
        this.state.test === null ? this.setState({ test:"mopen" }): this.setState({test: null});

    };
    render() {
      return (
        <Router>
            <div className="wrapper" onClick={this.altMenuCallback}>
                <MobileMenu display={this.state.css}/>
                <Header state={this.state.test} mobileCallback={this.mobileCallback} mobileMenuBtnCallback={this.mobileMenuCallback} logoDisplay={this.state.css2}/>
    
                <Route exact={true} path={"/"} render={(props) => 
                    <Gallery {...props} images={imageSetTest}/>
                }/>
                <Route path={"/AboutMe"} render={data => (
                    <AboutMe test={data}/>
                )}/>
                <Route path={"/detail/:pieceID"} render={({match}) =>(
                    <PieceOverview set={imageSetTest.find(g => g.title === match.params.pieceID)}/>
                )}/>
            </div>
        </Router>
      );
    }
}

const Header = ({logoDisplay, mobileMenuBtnCallback, mobileCallback, state }) => {
    return(
        <div className="HeaderGrid animation" onLoad={delay(function(){document.querySelector('.HeaderGrid').classList.add('opacity-1');},200)}>
            <div className="logoContainer m-0 p-0 grid-row-1">
                <Link to={"/"}>
                    <img src={logoWhite} className={`siteLogo ${logoDisplay}`} alt="logo"/>
                </Link>
            </div>

            <div id={"nav-icon2"} onClick={mobileCallback} className={`${state}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


            <img className="mobileMenuBtn" src={menu} onClick={mobileMenuBtnCallback} alt="Menu" ></img>
            <Link to={'/'} id="work" className="mobileDisplay nav fWeight-600 m-0 p-0 grid-col-2 grid-row-2 item-begin-h navAnim">Work</Link>
            <Link to={'/AboutMe'} id="aboutMe" className="mobileDisplay nav fWeight-600 m-0 p-0 grid-col-3 grid-row-2 item-end-h navAnim">About</Link>
        </div>
    );
}

const Gallery = ({images}) =>  {
    return (
        <div id="galleryGrid" onLoad={delay(function(){document.querySelector('#galleryGrid').classList.add('opacity-1');},200)} className="content galleryGrid animation item-center-v-h"> 
            <div id="gallery" className="gallerySubGrid grid-row-2 grid-col-2">
                {images.map( gc => (<Link to={`/Detail/${gc.title}`}><div key={gc.image[0].toString()} className="item-center-v-h">
                    <img className="b-rad img-size imgAnim" src={gc.image[0]} alt={gc.description}/></div></Link>))}
            </div> 
        </div>
    );
};

const AboutMe = () => {
    return(
        <div id="aboutMeGrid" onLoad={delay(function(){document.querySelector('#aboutMeGrid').classList.add('opacity-1');},200)} className="content aboutMeGrid animation"> 
            <div className="aboutMeImgContainer">
                <img src={meImage} className="b-rad aboutMeImg" alt="It's me!"/>
            </div>
            <div className="aboutMeText">
                <h2>Hello!</h2>
                <p>My name is Michelle and I have been working as a freelance digital artist since 2013 creating digital paintings, illustrations and comics for various clients.</p>
                <br></br>
                <p>In May of this year, I took the plunge into graphic design work for various clients around the world. I am confident with Adobe Photoshop, Illustrator, InDesign. As well as the Adobe Creative Suite, I use the digital illustration app ‘ProCreate’ on the iPad Pro. I'm also experienced with both the Windows and MacOS platforms.</p>
                <br></br>
                <p> As I enjoy learning new skills, in my spare time I have completed an online course on HTML and CSS using Codecademy. If you'd like to get in contact with me please don't hesitate, My contact details are below!</p>
                </div>
                <SocialMedia/>
            </div>
        );
}

const PieceOverview = ({ set }) => {
    return (
        <div id="pieceDetail" className="content wrapper animation" onLoad={delay(function(){document.querySelector('#pieceDetail').classList.add('opacity-1');},200)}>
            <div className="pieceInfoGrid">
                <div className="test grid-row-1 item-center-row">
                    <p className="pt-60 pb-60 pieceFontSize">{set.description}</p>
                </div>
            </div>
            <div className="pieceInfoImageGrid">
                {set.image.map(gc => <img key={gc.toString()}src={gc} className={`pieceInfoClass grid-col-2 ${set.class}`} alt={gc.toString()}></img>)}
            </div>
        </div>
    );
};

const SocialMedia = () =>{
    return (
        <div className="content socialWrapper">
            <a href="mailto:michelle@mk-creativedesign.com" title="Email">
                <svg viewBox="0 0 512 512" fill="#4a4a4a">
                    <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z">
                    </path>
                </svg>
            </a>
            <a href="https://www.facebook.com/MKCreativeDesignNI/" title="Facebook">
                <svg viewBox="0 0 512 512" fill="#4a4a4a">
                    <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z">
                    </path>
                </svg>
            </a>
            <a href="https://www.instagram.com/mk.creativedesign/" title="Instagram">
                <svg viewBox="0 0 512 512" fill="#4a4a4a">
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z">
                    </path>
                    <circle cx="351.5" cy="160.5" r="21.5">
                    </circle>
                </svg>
            </a>
        </div>
    );
}

const MobileMenu = ({display}) =>{
    return(
        <div id="mobileMenu" className={`mobileMenuWrapper ${display}`}>
            <div className="menuLogoContainer">
                <img src={logoWhite} className="menuSiteLogo" alt="logo"/>
            </div>
            <div>
                <Link to={"/"}>
                    <a>Work</a>
                </Link>
                
                <Link to={"/AboutMe"}>
                    <a>About</a>
                </Link>
            </div>
        </div>
    );
}

export default App;