import React from 'react';
import { InputWrapper, Input, Label, LabelError } from 'styles/form';

export default function DragonList(props) {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <Input {...props.input} />
      <LabelError>{props.error}</LabelError>
    </InputWrapper>
  );
}
