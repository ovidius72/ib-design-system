// import Icons from '@fluentui/react/lib/Icons';
import React, { FC } from 'react';

export type IBIconProps = {
  name: string;
};

const IBIcon: FC<IBIconProps> = ({ name }) => {
  return <div>{name}</div>;
};

export { IBIcon };
