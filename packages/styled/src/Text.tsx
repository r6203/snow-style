import {styled} from './styled';
import {systemStyles} from '@r6203/system';

import {Box} from './Box';

export const Text = styled(Box)(props => ({
  fontFamily: props.theme.fonts.body,
  ...systemStyles(props, 'text'),
}));

Text.defaultProps = {
  as: 'p',
};
