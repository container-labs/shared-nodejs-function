import {
  // createWrapper,
  // deleteWrapper,
  // listWrapper,
  childListWrapper,
  singleWrapper,
  // updateWrapper,
} from './server/wrappers';

import {
  createWrapper,
  singleWrapper,
  listWrapper,
  indexQuery,
  multiIndexQuery,
  updateWrapper,
  deleteWrapper,
} from './server/firestore';

import FireClass from './server/firebase';

export default FireClass;

export {
  // createWrapper,
  // deleteWrapper,
  // listWrapper,
  childListWrapper,
  // singleWrapper,
  // updateWrapper,

  createWrapper,
  singleWrapper,
  listWrapper,
  indexQuery,
  multiIndexQuery,
  updateWrapper,
  deleteWrapper,
}
