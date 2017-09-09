import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, defaultValue, label, error, type, onFocus, onChange, checkUserExists }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        
        onBlur={checkUserExists}
        value={value}
        defaultValue={defaultValue}
        type={type}
        name={field}
        className="form-control"
        placeholder="Text input"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  
  checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
