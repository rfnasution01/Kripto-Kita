import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getRates } from './slices/listCurrencyAPI'

type metaType = {
  totalItem?: number
  page?: number
  limit?: number
  count?: number
  q?: string
}

export interface Res<T> {
  data: T
  meta?: metaType
}

export interface ObjectPaginated<T> {
  data: { string?: T[] }
  meta: metaType
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    redirect: 'follow',
  }),
  tagTypes: ['rates'],
  endpoints: (builder) => ({
    getRates: builder.query<Res<getRates[]>, void>({
      query: () => ({
        url: `rates`,
      }),
      providesTags: () => [{ type: 'rates' }],
    }),
  }),
})

export const { useGetRatesQuery } = api
