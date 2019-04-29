export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export const USER_INFO = 'USER_INFO';

export interface Add {
  type: typeof INCREMENT_ENTHUSIASM;
}

export interface Reduce {
  type: typeof DECREMENT_ENTHUSIASM;
}

export interface setUser {
  type: typeof USER_INFO;
  userInfo:any
}

export type EnthusiasmAction = Add | Reduce | setUser;

export function Add(): Add {
  return {
    type: INCREMENT_ENTHUSIASM
    
  }
}

export function Reduce(): Reduce {
  return {
    type: DECREMENT_ENTHUSIASM
  }
}

export function setUser(userInfo:any): setUser {
  return {
    type: USER_INFO,
    userInfo
  }
}