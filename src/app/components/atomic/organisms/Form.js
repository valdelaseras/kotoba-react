import React from 'react';
import FormGroup from '../../atomic/molecules/FormGroup';

const Form = props =>
            <form id={ props.id }>
                { props.children.map( child =>
                    <FormGroup key={ child.id }
                               id={ child.id }
                               title={ child.title }
                               children={ child.inputs }/>)
                }
            </form>;

export default Form;
