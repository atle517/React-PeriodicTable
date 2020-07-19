import React, { Component } from 'react'
import './Element.css';
import './InfoBar.css';
import Element from './Element';

export class InfoBar extends Component {
    render() {
        if (this.props.element !== null) {
            const { element } = this.props;

            return (
                <div className="info-bar">
                    <div className="symbol-info-container">
                        {/* Show element box */}
                        <div className={`component-element big ${element.category}`}>
                            <div className="number-big">{element.number}</div>
                            <div className="symbol-big">{element.symbol}</div>
                        </div>
                    </div>

                    {/* Element name */}
                    <div className="element-info">
                        <div className="element-name">{element.name}</div>
                        <div className="element-desc">{element.summary}</div>
                        <div className="mass">{element.atomic_mass}u</div>
                    </div>
                </div>
            )
        } else {
            return <div className="info-bar">

            </div>
        }
    }
}

export default InfoBar
