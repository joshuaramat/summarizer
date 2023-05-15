import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Get API key
const apiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Define a service using a base URL and expected endpoints
export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent is used to encode the articleUrl parameter to be used in the URL query string
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// export useLazyGetSummaryQuery hook for fetching data from the API
export const { useLazyGetSummaryQuery } = articleApi;