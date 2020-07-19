import React from 'react';
import logo from './logo.svg';
import './App.css';
import Element from './components/Element';
import InfoBar from './components/InfoBar';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.createElements();

    this.state = {
      selectedElement: null
    }
  }

  createElements() {
    this.elements_1To56 = [];
    this.elements_57To71 = [];
    this.elements_72To88 = [];
    this.elements_89To103 = [];
    this.elements_104To118 = [];

    for (let i = 1; i <= 56; i++) this.elements_1To56.push(i);
    for (let i = 57; i <= 71; i++) this.elements_57To71.push(i);
    for (let i = 72; i <= 88; i++) this.elements_72To88.push(i);
    for (let i = 89; i <= 103; i++) this.elements_89To103.push(i);
    for (let i = 104; i <= 118; i++) this.elements_104To118.push(i);
  }

  setActiveElement = element => {
    this.setState({
      selectedElement: element
    })
  }

  render() {

    return (
      <div className="wrapper">

        <h1 style={{ textAlign: 'center' }}>Periodic Table</h1>

        <div className="table-elements">

          {/* Elements 1 - 56 */}
          {this.elements_1To56.map((element, index) => {
            return <Element handler={this.setActiveElement} key={element} nr={element} />
          })}

          <Element nr="57-71" notElement />

          {/* Elements 57 - 71 */}
          {this.elements_72To88.map((element, index) => {
            return <Element handler={this.setActiveElement} key={element} nr={element} />
          })}

          <Element nr="89-103" notElement />

          {/* Elements 104 - 118 */}
          {this.elements_104To118.map((element, index) => {
            return <Element handler={this.setActiveElement} key={element} nr={element} />
          })}

        </div>

        <div className="table-elements-extra" >
          {/* Elements 57 - 71 */}
          {this.elements_57To71.map((element, index) => {
            return <Element handler={this.setActiveElement} key={element} nr={element} />
          })}

          {/* Elements 89 - 103 */}
          {this.elements_89To103.map((element, index) => {
            return <Element handler={this.setActiveElement} key={element} nr={element} />
          })}
        </div>

        <br />
        <InfoBar element={this.state.selectedElement} />
        
      </div>


    )
  }
}

export default App;
