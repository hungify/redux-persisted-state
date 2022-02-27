import { DOMAttributes } from 'react';
import React from 'react';

declare namespace JSX {
  interface ExtendedButton
    extends React.DetailedHTMLProps<DOMAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen?: boolean;
  }

  interface IntrinsicElements {
    button: ExtendedButton;
  }
}
