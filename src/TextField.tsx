import React, { Ref } from 'react';
import { IonInput } from '@ionic/react';
import { connectField, filterDOMProps } from 'uniforms/es5';

import wrapField from './wrapField';

export type TextFieldProps = {
  id: string;
  decimal?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  onChange: (value?: string) => void;
  value?: string;
  placeholder?: string;
  disabled: boolean;
  readonly?: boolean;
  error?: boolean;
} & HTMLIonInputElement;

function Text(props: TextFieldProps) {
  return wrapField(
    props,
    <IonInput
      id={props.id}
      name={props.name}
      disabled={props.disabled}
      readonly={props.readonly}
      // @ts-ignore
      onIonChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
      // ref={props.inputRef}
      type={props.type ?? 'text'}
      value={props.value ?? ''}
    />,
  );
}

export default connectField(Text);
