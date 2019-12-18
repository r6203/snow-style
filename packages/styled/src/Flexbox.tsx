import styled from '@emotion/styled';

import {
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  FlexDirectionProps,
  FlexProps,
  FlexWrapProps,
  systemStyles,
  SystemProps,
} from '@r6203/system';

import {Box} from './Box';

type FlexboxProps = AlignContentProps &
  AlignItemsProps &
  AlignSelfProps &
  FlexDirectionProps &
  FlexProps &
  FlexWrapProps;

export const Flexbox = styled(Box)<SystemProps & FlexboxProps>(props =>
  systemStyles({
    display: 'flex',
    ...props,
  }),
);
