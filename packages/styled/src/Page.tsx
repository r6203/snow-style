// TODO import reset
//
import React from 'react';
import {Global, css} from '@emotion/core';
import {useTheme} from 'emotion-theming';

import {Theme} from '@r6203/theme';

export interface PageProps {
  reset?: boolean;
}

export const Page: React.FC<PageProps> = ({children}) => {
  const theme: Theme = useTheme();

  return (
    <>
      <Global
        styles={css({
          body: {
            backgroundColor: theme.colors.background,
          },
        })}
      />
      {children}
    </>
  );
};

Page.defaultProps = {
  reset: true,
};
