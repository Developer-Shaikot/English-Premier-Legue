import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamData from '../TeamData/TeamData';



const TeamDetails = () => {
    
    const {idTeam} = useParams();
    const [teams, setTeams] = useState({})
    useEffect(()=> {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]));
    } ,[idTeam])
    return (
        <div>
            <TeamData teams={teams}></TeamData>
        </div>
    );
};

export default TeamDetails;