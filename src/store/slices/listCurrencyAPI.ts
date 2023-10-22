import { Res, api } from '../api'

export interface getRates {
  id: string
  symbol: string
  currencySymbol: string
  type: string
  rateUsd: string
}
const listCurrencyEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getRates: builder.query<Res<getRates[]>, void>({
      query: () => ({
        url: `rates`,
      }),
      providesTags: () => [{ type: 'rates' }],
    }),
    getRatesById: builder.query<Res<getRates[]>, { id: string }>({
      query: ({ id }) => ({
        url: `rates/${id}`,
      }),
      providesTags: (_result, _error, { id }) => [{ type: 'rates', id }],
    }),
  }),
})

export const { useGetRatesQuery, useGetRatesByIdQuery } = listCurrencyEndpoint
