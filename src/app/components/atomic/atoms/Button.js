import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Button extends Component {
    clickHandler = () => {
        if ( this.props.link ) {
            this.props.history.push( this.props.link );
        }
    };

    render(){
        return(
            <button type={ this.props.type }
                    title={ this.props.title }
                    className={ "btn " + this.props.className }
                    disabled={ this.props.isValid ? '' : 'disabled' }
                    onClick={ this.clickHandler }>{ this.props.title }
            </button>
        )
    }
}

export default withRouter( Button );

// TODO: on click now works for navigation but eventually need another solution.
//  A button in lobby for example does not navigate

// TODO: 'back' in SecNav is just / now, so not truly back
