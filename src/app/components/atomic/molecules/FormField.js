import React, { useState } from 'react';

let isValid, fieldValue, setValidity, setFieldValue;

const FormField = (props) => {
  [isValid, setValidity] = useState(false);
  [fieldValue, setFieldValue] = useState(props.value);

  return <div className="field">{replaceChildren(props)}</div>;
};

const handleChange = (e) => {
  setValidity(e.target.checkValidity());
  setFieldValue(e.target.value);
};

const replaceChildren = (props) => {
  return React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      isValid: isValid,
      fieldValue: fieldValue,
      handleChange: handleChange,
    }),
  );
};

export default FormField;
