import React from 'react';
import './Lesson3.scss';
// eslint-disable-next-line no-unused-vars
import { async } from 'q';

class CardList extends React.Component {
    render() {
        return (
            <div>
                { this.props.profiles.map(profile => <Card key={profile.id} {...profile}/>) }
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="avatar"/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = async (event) => {
        event.preventDefault();
        const request = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const response = await request.json();
        this.props.onResponse(response);
        this.setState({ userName: '' });
    };
    handleOnChange = (event) => this.setState({ userName: event.target.value });
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Github username" 
                    value = {this.state.userName}
                    onChange = {this.handleOnChange}
                    required 
                />
                <button className="button add-card-btn">Search and Add Card</button>
            </form>
        )
    }
}

class Lesson3 extends React.Component {
    state = {
        profiles: []
    };
    formResponsHandler = (userInfo) => {
        console.log(userInfo);
        this.setState(prevState => ({
            profiles : [...prevState.profiles, userInfo] 
         })
        );
    };
    render() {
        return(
            <div>
                <h2 className="header">{this.props.title}</h2>
                <Form onResponse={this.formResponsHandler}/>
                <CardList profiles={this.state.profiles}/>
            </div>   
        );
    }
}

export default Lesson3;