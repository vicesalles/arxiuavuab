import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Carret } from '@buffetjs/icons';

const Button = isOpen => {
  return (
    <>
      <FormattedMessage id="app.components.Users.SortPicker.button-label" />
      <Carret fill={isOpen ? '#3DAE2B' : '#292b2c'} />
    </>
  );
};

export default Button;
