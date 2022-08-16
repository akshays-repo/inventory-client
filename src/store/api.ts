import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AppAuthentication } from 'src/@core/utils/authentication'

export interface Post {
  id: string
  name: string
}

type PostsResponse = Post[]

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_GATEWAY,
  prepareHeaders: headers => {
    const token = new AppAuthentication().getUserToken()
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})

export const api = createApi({
  baseQuery,
  tagTypes: ['Post'],
  endpoints: build => ({
    getPosts: build.query<PostsResponse, void>({
      query: () => 'posts',
      providesTags: ['Post']
    }),

    addPost: build.mutation<Post, Partial<Post>>({
      query: body => ({
        url: `posts`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }]
    }),

    getPost: build.query<Post, string>({
      query: id => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }]
    }),

    updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData('getPost', id, draft => {
            Object.assign(draft, patch)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }]
    }),

    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }]
    })
  })
})

export const { useGetPostQuery, useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } =
  api
