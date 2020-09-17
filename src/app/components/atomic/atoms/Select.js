import React from 'react';

const Select = props =>
    <label htmlFor={ props.name }>{ props.title }
        <select id={ props.id } name={ props.name }>
            { props.children.map( child =>
                <option key={ child.id } value={ child.title }>
                    { child.title }
                </option>
            )}
        </select>
    </label>
;

export default Select;

// todo: add optional p ( font size small or maybe just small tag? ) beneath Label
