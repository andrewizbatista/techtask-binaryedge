import { useReducer } from 'react';
import { fetcher, fetcherWithToken } from 'src/api';

const STARTED = 'STARTED';
const SUCCEEDED = 'SUCCEEDED';
const FAILED = 'FAILED';
const RESET = 'RESET';
const UPDATE_CACHE = 'UPDATE_CACHE';

export const initialState: UseQueryState<any, any> = {
  isLoading: false,
  hasError: false,
  hasSucceeded: false,
  data: null,
  errorMessage: '',
  prevPayload: null,
};

export const reducer = (
  state = initialState,
  action: any,
): UseQueryState<any, any> => {
  switch (action.type) {
    case STARTED:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        hasSucceeded: false,
        errorMessage: '',
        prevPayload: action.payload,
      };
    case SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        hasSucceeded: true,
        errorMessage: '',
        data: action.payload,
      };
    case FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        hasSucceeded: false,
        errorMessage: action.payload,
        data: null,
      };
    case UPDATE_CACHE:
      return {
        ...state,
        data: action.payload,
      };
    case RESET:
      return initialState;
    default:
      throw new Error();
  }
};

export default <Request = any, Response = any>({
  endpoint,
  method = 'GET',
  noAuth = false,
}: Props<Response>): ReturnShape<Request, Response> => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleError = (err: any) =>
    new Promise((reject) => {
      dispatch({ type: FAILED, payload: 'Something went' });
      reject(null);
    });

  const handleApiReturn = (data: any) =>
    new Promise((resolve) => {
      dispatch({ type: SUCCEEDED, payload: data });
      resolve(data);
    });

  const handleSubmit = (params = {}, querystring?: any) => {
    dispatch({ type: STARTED, payload: params });

    let url = endpoint;
    if (querystring) {
      const qs = Object.keys(querystring)
        .map((key) => `${key}=${querystring[key]}`)
        .join('&');
      url = `${endpoint}?${qs}`;
    }

    try {
      if (noAuth) {
        return fetcher(method, url, params)
          .then(handleApiReturn)
          .catch(handleError);
      }

      return fetcherWithToken(method, url, params)
        .then(handleApiReturn)
        .catch(handleError);
    } catch (e) {
      return handleError(e);
    }
  };

  return {
    state,
    submit: handleSubmit,
    reset: () => dispatch({ type: RESET }),
    updateCache: (changeFunction) =>
      dispatch({ type: UPDATE_CACHE, payload: changeFunction(state.data) }),
  };
};

interface ReturnShape<Request, Response> {
  state: UseQueryState<Request, Response>;
  submit: (request?: Request, querystring?: any) => Promise<any>;
  reset: () => void;
  updateCache: (changeFunction: (data: Response) => Response) => void;
}

export interface UseQueryState<Request, Response> {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  hasSucceeded: boolean;
  data: Response | null;
  prevPayload: Request | null;
}

interface Props<Response> {
  endpoint: string;
  method: Method;
  noAuth?: boolean;
}

type Method = 'GET' | 'POST' | 'PUT';
