import React from 'react';
import { NotFound } from './NotFound';
import { Forbidden } from './Forbidden';

const Error = ({error}) => {
  switch (error) {
    case 404:
      return <NotFound/>
    case 403:
      return <Forbidden/>
    default:
      return null
  }
}

export { Error }
