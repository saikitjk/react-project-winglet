import React from "react";
import background from './bg.jpg';
import photo11 from './11.png';
import photo22 from './22.png';
import photo33 from './33.png';
import photo44 from './44.png';
import photo55 from './55.png';
import photo66 from './66.png';
import "./style.css";

export default function LandingPage() {
  return <div class="hero">

    <img src={background} alt="Background" className="backGround" />

    <h2 className="heroslogan">The Tools You Need <br>
    </br>To Plan Your Next Date</h2>
  <div className="content-block">
    <div className="paragraph1">
      <img src={photo11} alt="photo11" className="photo11" />
      <p className="para1">Have Winglet capture your time together.</p>
    </div>
    <br>
    </br>

    <div className="paragraph2">
      <img src={photo22} alt="photo22" className="photo22" />
      <p className="para2">Leave your worries behind. <br></br> Stay cool and calm. <br></br> Winglet is here. </p>
    </div>
    <br>
    </br>
    <div className="paragraph3">
      <img src={photo33} alt="photo33" className="photo33" />
      <p className="para3">New relationships, new beginnings! <br></br> We’ll help you find your way. </p>
    </div>
    <br>
    </br>
    <div className="paragraph4">
      <img src={photo44} alt="photo44" className="photo44" />
      <p className="para4">Spend the majority of your time talking <br></br>about each other and not where you should eat. </p>
    </div>
    <br>
    </br>
    <div className="paragraph5">
      <img src={photo55} alt="photo55" className="photo55" />
      <p className="para5">Live outside your cell phone. <br></br>Find adventures and create memories. </p>
    </div>
    <br>
    </br>
    <div className="paragraph6">
      <img src={photo66} alt="photo66" className="photo66" />
      <p className="para6">Set the mood right. <br></br> Listen to what you both love.</p>
    </div>
  </div>
  </div>;
}
