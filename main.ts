import React from 'react';
import ReactDOM from 'react-dom';
import emStyled from '@emotion/styled';

console.log({
  React,
  ReactDOM,
  emStyled,
}, [
  Object.keys(React),
  Object.keys(ReactDOM),
  typeof emStyled
]);
