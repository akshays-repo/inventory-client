import { configureStore } from '@reduxjs/toolkit'
import { folderApi } from 'src/features/Folders/folderApi'
import { productSearchApi } from 'src/features/ProductAutoComplete/api'
import exampleSlice from './example.slice'

export const store = configureStore({
  reducer: {
    example: exampleSlice,
    [folderApi.reducerPath]: folderApi.reducer,
    [productSearchApi.reducerPath]: productSearchApi.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
