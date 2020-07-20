import React, { Component } from 'react'
import './Element.css'
import dataFile from '../PeriodicTableJSON.json';

export class Element extends Component {

    constructor(props) {
        super(props)

        //Make sure it's not the '57-71' or '89-103'
        if (!props.notElement) {

            //Get the right element data from the JSON file
            let element = dataFile.elements.filter(e =>
                e.number === props.nr
            );

            this.state = {
                element: element[0]
            }
        }
    }


    render() {
        if (!this.props.notElement) {
            // Show element
            const { element } = this.state;

            return (
                <div className={`component-element element-${element.number} ${element.category}`} onMouseOver={() => this.props.handler(element)}>
                    <div className="number">{element.number}</div>
                    <div className="symbol">{element.symbol}</div>
                </div>
            )
        } else {
            // Show '57-71' or '89-103'
            return (
                <div className={`component-element short${this.props.nr}`}>
                    <div className="number">{this.props.nr}</div>
                </div>
            )
        }
    }
}

export default Element
