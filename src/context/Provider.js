import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialState/authState';
import contacts from './reducers/contacts';
import contactsInitialState from './initialState/contactsInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  //using useReducer to create and or change the state
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
