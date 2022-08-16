import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/store/api'
import { CategoreyType, Folder, FolderResponse, FolderSending } from './folder.type'

export const folderApi = createApi({
  reducerPath: 'folderApi',
  baseQuery,
  tagTypes: ['Folder'],
  endpoints: build => ({
    getFoldersType: build.query<CategoreyType, void>({
      query: () => 'metas/categorietype'
    }),
    getFolders: build.query<FolderResponse, void>({
      query: () => 'categories',

      // Provides a list of `Folder` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Folder` element was added.
      providesTags: ['Folder']
    }),
    addFolder: build.mutation<Folder, FolderSending>({
      query(body) {
        return {
          url: `categories`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: ['Folder']
    }),
    getFolder: build.query<Folder, number>({
      query: id => `categories/${id}`,
      providesTags: (result, error, id) => [{ type: 'Folder', id }]
    }),
    updateFolder: build.mutation<Folder, Partial<Folder>>({
      query(data) {
        const { id, ...body } = data

        return {
          url: `categories/${id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Folder', id }]
    }),
    deleteFolder: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `categories/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Folder', id }]
    })
  })
})

export const {
  useGetFoldersQuery,
  useAddFolderMutation,
  useGetFolderQuery,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
  useGetFoldersTypeQuery
} = folderApi
