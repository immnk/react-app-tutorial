import React from 'react';
import './Lesson3.scss';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class CardList extends React.Component {
    render() {
        return (
            <div>
                { testData.map(profile => <Card {...profile}/>) }
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

class Lesson3 extends React.Component {
    render() {
        return(
            <div>
                <h2 className="header">{this.props.title}</h2>
                <CardList />
            </div>       
        );
    }
}

export default Lesson3;