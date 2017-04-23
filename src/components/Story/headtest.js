import React from 'react';

import Header from '../Header/header.js';

import { storiesOf, action } from '@kadira/storybook';


storiesOf('Header', module)
  .add('without text field', () => (
    <Header />
  ))
  .add('with no text', () => (
    <button></button>
  ));