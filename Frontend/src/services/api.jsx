import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/**
 * API Setup for RTK Query
 * Phase 1 : Authentication
 */

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem('token')

      headers.set('Accept', 'application/json')
      headers.set('Content-Type', 'application/json')
      if (!headers.has('Authorization') && token)
        headers.set('Authorization', `Bearer ${token}`)

      return headers
    }
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: '/user/login',
        method: 'POST',
        body: data
      })
    }),
    getUser: builder.mutation({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
      })
    }),
    setUserName: builder.mutation({
      query: (data) => ({
        url: '/user/profile',
        method: 'PUT',
        body: data
      }),
    }),
  })
})

export const { useSignInMutation, useGetUserMutation, useSetUserNameMutation } = api
