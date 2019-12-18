import CSS from 'csstype';
import styled from '@emotion/styled';

import {systemStyles, SystemProps} from '@r6203/system';

export const withSystem = (
  tag: any,
  baseProps?: SystemProps | CSS.Properties,
  variant?: string,
) => {
  const comp = styled(tag);

  return comp<SystemProps>(props => ({
    ...baseProps,
    ...systemStyles({...baseProps, ...props}, variant),
  }));
};
