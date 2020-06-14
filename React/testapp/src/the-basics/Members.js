import React from 'react';

function Member(props) {
    const members = props.crew;
    const deleteMember = props.deleteMember
    
    const memberList = members.map(member => {
        return (
            <div className="hummingbird" key={member.id}>
                <button onClick={ () => {deleteMember(member.id)} }>x</button>
                <div>Name: {member.name}</div>
                <div>Likes: {member.likes}</div>
                <div>Drift: {member.drift}</div>
            </div>
        )
    });

    const noDrift = members.map(member => {
        return member.drift === 'false' ? (
            <div className="hummingbird" key={member.id}>
                <div>Name: {member.name}</div>
                <div>Likes: {member.likes}</div>
                <div>No drift :(</div>
            </div>
        ) : null;
    });

    return (
        <div className="member-list">
            { memberList }
            <br/>
            { noDrift }
        </div>
    )
}

export default Member;