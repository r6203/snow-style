import styled from '@emotion/styled';
import {SystemProps, systemStyles} from '@r6203/system';

const StyledBox = styled.div<SystemProps>(props => systemStyles(props));

export const Box = StyledBox.withComponent('div');

Box.defaultProps = {
  as: 'div',
};
