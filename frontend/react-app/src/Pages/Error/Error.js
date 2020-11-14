import React from 'react';
import { NotFound } from './NotFound';

const Error = ({error}) => {
  switch (error) {
    case 404:
      return <NotFound/>
    default:
      return null
  }
}

export { Error }
