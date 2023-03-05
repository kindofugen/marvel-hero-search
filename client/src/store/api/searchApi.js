import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PUBLIC, CHARACTERS, SEARCH_PARAMS } from '../../constants/apiConstants';
import { getHash, getTimeStamp } from '../../utils/network';
export const searchApi = createApi({
  reducerPath: 'charactersSearch',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    searchCharacter: builder.query({
      query: (name) => ({
        url: `${PUBLIC + CHARACTERS}?ts=${getTimeStamp()}&apikey=${
          process.env.REACT_APP_API_KEY_PUBLIC
        }&hash=${getHash()}${SEARCH_PARAMS + name}`,
      }),
      transformResponse: (response) => response.data.results,
    }),
  }),
});

export const { useSearchCharacterQuery, useLazySearchCharacterQuery } = searchApi;
