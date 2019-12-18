import {styled} from './styled';
import {systemStyles} from '@r6203/system';

import {Box} from './Box';

const heading = (variant: string, props: any) => ({
  fontFamily: props.theme.fonts.heading,
  ...systemStyles(
    {
      ...props,
      variant,
    },
    'heading',
  ),
});

export const H1 = styled(Box)(props => heading('h1', props));

H1.defaultProps = {
  as: 'h1',
};

export const H2 = styled(Box)(props => heading('h2', props));

H2.defaultProps = {
  as: 'h2',
};

export const H3 = styled(Box)(props => heading('h3', props));

H3.defaultProps = {
  as: 'h3',
};

export const H4 = styled(Box)(props => heading('h4', props));

H4.defaultProps = {
  as: 'h4',
};

export const H5 = styled(Box)(props => heading('h5', props));

H5.defaultProps = {
  as: 'h5',
};

export const H6 = styled(Box)(props => heading('h6', props));

H6.defaultProps = {
  as: 'h6',
};
