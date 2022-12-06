import React from 'react';
import { SvgProps } from 'react-native-svg';

import { w, h } from '../lib/utils';

export const withSvg = (Component: React.ComponentType<SvgProps>) => {
  const WithSvg = (props: SvgProps) => {
    return (
      <Component {...props} width={w(props.width as number)} height={h(props.height as number)} />
    );
  };

  return WithSvg;
};
