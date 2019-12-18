import styled from '@emotion/styled';
import {systemStyles} from '@r6203/system';

import {Box} from './Box';

export interface ContainerProps {
  // TODO: keys from theme
  fluid?: boolean;
}

export const Container = styled(Box)<ContainerProps>(({fluid, ...props}) =>
  systemStyles(
    {
      mx: 'auto',
      width: fluid ? 'full' : undefined,
      ...props,
    },
    'container',
  ),
);
