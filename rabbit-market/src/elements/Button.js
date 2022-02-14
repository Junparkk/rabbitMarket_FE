import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    disabled,
    border_radius,
  } = props;
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    border_radius: border_radius,
  };
  return (
    <React.Fragment>
      <ElButton disabled={disabled} {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
  disabled: false,
  border_radius: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #6667ab;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) =>
    props.border_radius ? `border-radius: ${props.border_radius};` : ''}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  font-size: 1em;
  white-space: nowrap;
  cursor: pointer;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 40px;
  background-color: #6667ab;
  color: #fff;
  box-sizing: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50%;
  vertical-align: middle;
  cursor: pointer;
`;

export default Button;
