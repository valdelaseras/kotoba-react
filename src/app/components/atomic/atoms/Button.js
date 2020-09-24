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
                    className={ "btn " + this.props.class }
                    onClick={ this.clickHandler }
                    disabled={ this.props.disabled }>{ this.props.title }
            </button>
        )
    }
}

export default withRouter(Button);

// TODO: this sort of works (disabled state) but it's added/removed 'too late'. '
//  'setState is not immediate ( clearly ) so I will need to fix this

// TODO: on click now works for navigation but eventually need another solution.
//  A button in lobby for example does not navigate

// TODO: 'back' in SecNav is just / now, so not truly back
