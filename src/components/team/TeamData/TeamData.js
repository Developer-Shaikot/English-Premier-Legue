import React from 'react';
import imageMale from '../TeamData/male.png'
import imageTwitter from '../TeamData/Twitter.png'
import imageYoTube from '../TeamData/YouTube.png'

import './TeamData.css'
const TeamData = (props) => {
    const { strTeam, strTeamBanner, intFormedYear, strCountry, strAlternate, strGender, strLeague, strStadiumDescription, strTwitter, strYoutube} = props.teams;
    console.log(props.teams);
    const club ={hight:'80%', padding:'20px',width:'250px', padding: '20px', marginLeft: '90% auto'}
    const strTeamBadgeStyle = {hight:'80', width:'900px', borderRadius:'30px', padding: '10px'}
    const strTeamStyle = {backgroundColor:'cyan' , color:'black',border: '1px solid gray', borderRadius:'20px', margin: '30px', padding:'20px'}
    const DescriptionDEStyle = {margin:'20px', padding:'20px'}
    
    return (
       
        <div className="teams" >
            <header className="bg">
            <img className="d-block w-100" style={strTeamBadgeStyle} src={strTeamBanner} alt=""/>
            <div className="team-detail" style={strTeamStyle}>
                <ul className="d-block w-100">
                <h1 > {strTeam}</h1>
                 <br/>
                 <strong>Founded: {intFormedYear}</strong>
                 <br/>
                 <strong>Country: {strCountry}</strong>
                 <br/>
                 <strong>{strAlternate}</strong>
                 <br/>
                 <strong>League: {strLeague}</strong>
                 <br/>
                 <strong>Gender: {strGender}</strong>
                </ul>
                 
             <div className="col-md-5">
               <img class="d-block w-100" style={club} src={imageMale} alt=""/>
                
             </div>
             </div>
                <p  style={DescriptionDEStyle}>{strStadiumDescription}</p>
                <br/>
                <small style={DescriptionDEStyle}> <a href={strTwitter}> <img src={imageTwitter} alt=""/> </a> </small>
                <small> <a href={strYoutube}> <img src={imageYoTube} alt=""/> </a> </small>
            </header>
        </div>
      
    );
};

export default TeamData;