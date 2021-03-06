import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from './';

storiesOf('Login', module)
  .add('Default view', () => (
    <Login
      onSubmitClick={action('Submitted')}
    />
  ));
