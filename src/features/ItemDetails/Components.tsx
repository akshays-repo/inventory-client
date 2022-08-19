import React, { FC } from 'react'

type Props = {
  errorMessage: string
}

export const InputClassName =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

export const LabelClassName = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'

const ErrorField: FC<Props> = ({ errorMessage }) => {
  return <div className=' text-red-700'>{errorMessage}</div>
}

export default ErrorField
