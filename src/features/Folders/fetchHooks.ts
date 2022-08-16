import { useMemo } from 'react'
import { useAddFolderMutation, useDeleteFolderMutation, useGetFoldersQuery, useUpdateFolderMutation } from './folderApi'

export const useFolders = () => {
  const { data, refetch, isLoading, fulfilledTimeStamp } = useGetFoldersQuery()
  const [updateFolder] = useUpdateFolderMutation()
  const [deleteFolder] = useDeleteFolderMutation()
  const [addFolder] = useAddFolderMutation()

  return useMemo(() => {
    return {
      data,
      refetch,
      isLoading,
      updateFolder,
      deleteFolder,
      addFolder,
      lastUpdatedAt: fulfilledTimeStamp
    }
  }, [data, refetch, isLoading, updateFolder, deleteFolder, addFolder, , fulfilledTimeStamp])
}
