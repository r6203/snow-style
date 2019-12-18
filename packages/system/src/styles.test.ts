import {applyStyles, SystemFunction, SystemFunctionProps} from './styles';

test('applies styles', () => {
  const backgroundColor: SystemFunction = ({backgroundColor}) => ({
    backgroundColor,
  });

  let props: SystemFunctionProps = {
    backgroundColor: 'primary',
    theme: {},
  };

  expect(applyStyles(props, [backgroundColor])).toEqual({
    backgroundColor: 'primary',
  });

  const textAlign: SystemFunction = ({textAlign}) => ({textAlign});

  props = {
    ...props,
    textAlign: 'left',
  };

  expect(applyStyles(props, [backgroundColor, textAlign])).toEqual({
    backgroundColor: 'primary',
    textAlign: 'left',
  });
});
