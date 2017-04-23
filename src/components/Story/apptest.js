import React from 'react';

import App from '../../App.js';

import { storiesOf, action } from '@kadira/storybook';


storiesOf('Header', module)
  .add('without text field', () => (
    <App />
  ))
  .add('with no text', () => (
    <button></button>
  ));