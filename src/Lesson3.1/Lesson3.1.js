import React, { useState } from 'react';
import './Lesson3.1.scss';

const CardList = ({profiles}) => {
    return (
        <div>
            { profiles.map(profile => <Card key={profile.id} profile={profile} /> ) }
        </div>
    );
}

const Card = ({profile}) => {
    return(
        <div className="github-profile">
            <img src={profile.avatar_url} alt="avatar"/>
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    );
}

const Form = ({onFormSubmit}) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = async event => {
        event.preventDefault();
        const request = await fetch(`https://api.github.com/users/${userName}`);
        const response = await request.json();
        onFormSubmit(response);
        setUserName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Github username" 
                value = {userName}
                onChange = {event => setUserName(event.target.value) }
                required 
            />
            <button className="button add-card-btn">Search and Add Card</button>
        </form>
    );
}

const Lesson31 = (props) => {
    const [profiles, setProfiles] = useState([]);
    const handleFormSubmit = profile => {
        setProfiles([...profiles, profile]);
    }

    return(
        <div>
            <h3>{props.title}</h3>
            <Form onFormSubmit={(profile) => handleFormSubmit(profile)}/>
            <CardList profiles={profiles}/>
        </div>
    );
}

export default Lesson31;