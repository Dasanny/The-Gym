import React from 'react';
import Members from './Members';
import AddMember from './addMember';

class App extends React.Component {
  state = {
    hummingbirds: [
      { name: 'Jay JO', likes: 'biking', drift: 'true', id: 1},
      { name: 'MINU', likes: 'jay', drift: 'false', id: 2},
      { name: 'DOM', likes: 'jays', drift: 'false', id: 3},
    ]
  }

  addMember = member => {
    member.id = Math.random();

    let members = [...this.state.hummingbirds, member];

    this.setState({
      hummingbirds: members,
    });
  }

  deleteMember = id => {
   let members = this.state.hummingbirds.filter(member => {
      return member.id !== id;
    });

    this.setState({
      hummingbirds: members,
    });
    
  }

  render() {
    return (
      <div className="App">
        <h1>hi there :)</h1>

        <Members deleteMember={ this.deleteMember } crew={ this.state.hummingbirds }></Members>

        <br/>
        <AddMember addMember={ this.addMember }></AddMember>
      </div>
    );
  }
}

export default App;
