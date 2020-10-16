import React, { Component } from 'react';

export default class FormGroup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: props.id,
      isValid: false,
      fields: this.getAllChildrenOfType(props.children, 'FormField').map((field) => ({
        // The field names never change so we just get
        // the names from the children props right away
        name: field.props.children.props.name,
        value: field.props.value,
        isValid: false,
      })),
    };
  }

  /**
   * updatedState param is passed from the FormField children handleChange
   *
   * @param updatedState
   */
  handleChange = (updatedState) => {
    // Cloning the existing list of fields
    const fields = Array.from(this.state.fields);
    // Find the field that executed this handleChange callback method
    const updatedField = fields.find((field) => field.name === updatedState.name);

    // Then assign the updatedState's values for isValid and fieldValue to those in the
    // cloned fields array ( per field )
    updatedField.isValid = updatedState.isValid;
    updatedField.value = updatedState.fieldValue;

    const updatedFields = {
      fields: fields,
      isValid: !fields.filter((field) => !field.isValid).length,
    };
    // With this updated fields array, set the updated state of this component. If no fields
    // are left with isValid: false states, the group is valid
    this.setState(updatedFields);
    this.props.handleChange(Object.assign({ fields: this.state.fields, id: this.state.id }, updatedFields));
  };

  // TODO: duplicate functionality ( see Form )
  /**
   * Returns true if the type name param is found in the element param.
   *
   * Some form groups may contain children that are not form fields (like p or h3 tags etc).
   * The contents of these elements are apparently also prop children of those tags. These
   * just need to be rendered as is, so they return false in the first condition if the type
   * param is not actually string.
   *
   * If the intention is to actually do something with elements of type string, the second
   * statement will ensure the call does indeed return true.
   *
   * @param element
   * @param type
   * @returns {*|boolean}
   */
  elementIsOfType = (element, type) => {
    if (typeof element === 'string' && type !== 'string') return false;
    else if (typeof element === 'string' && type === 'string') return true;
    return element.type.name && element.type.name.includes(type);
  };

  // TODO: duplicate functionality ( see Form )
  /**
   * Get all children of a type. Recursively searches for prop children of the type param
   *
   * @param children
   * @param type
   * @returns {any[] | * | *}
   */
  getAllChildrenOfType(children, type) {
    return React.Children.map(children, (child) => {
      if (this.elementIsOfType(child, type)) {
        return child;
        // check if child has children props
      } else if (child.props && child.props.children) {
        return this.getAllChildrenOfType(child.props.children, type);
      }
    });
  }

  // TODO: duplicate functionality ( see Form )
  /**
   * Clone all children and pass a new prop to the children with the type param.
   *
   * @param children
   * @param type
   * @param props = the prop that needs to be passed to the cloned children of the type that is passed in the type
   *        param.
   * @returns {any[] | * | *}
   */
  recursiveCloneChildren = (children, type, props) => {
    return React.Children.map(children, (child) => {
      if (typeof child === 'string' || (!this.elementIsOfType(child, type) && !child.props.children)) {
        return child;
      } else if (!this.elementIsOfType(child, type) && child.props.children) {
        return React.cloneElement(child, { children: this.recursiveCloneChildren(child.props.children, type, props) });
      } else if (this.elementIsOfType(child, type)) {
        return React.cloneElement(child, props);
      }
    });
  };

  /**
   * In the render function we render any children that aren't FormFields as is,
   * without any added props. These don't need any validation, but we still want to render
   * them ( example: a P element in the form group with some additional information or what not )
   *
   * For any FormField elements that actually hold inputs, selects, checkboxes etc.,
   * we pass the handleChange function as an additional property .
   */
  render() {
    return (
      <div className="form-group" id={this.props.id}>
        {this.props.title ? <h2>{this.props.title}</h2> : null}
        {this.recursiveCloneChildren(this.props.children, 'FormField', {
          handleChange: this.handleChange,
        })}
      </div>
    );
  }
}
