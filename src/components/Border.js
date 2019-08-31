import React from 'react';
import BorderStyle, { Background, BorderTop, BorderBottom } from 'styles/border';

function Border(props) {
  return (
    <BorderStyle data-component="border">
      <BorderTop />
      <Background>{props.children}</Background>
      <BorderBottom />
    </BorderStyle>
  );
}

export default Border;
