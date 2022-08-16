// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { FC } from 'react'
import Router from 'next/router'

type TFolderCard = {
  title: string
  image?: string
}

const FolderCard: FC<TFolderCard> = ({ title, image }) => {
  return (
    <div className='cursor-pointer border-2 rounded-lg border-gray-300 hover:border-indigo-500	'>
      <Card
        onClick={() => {
          Router.push('folders/items')
        }}
      >
        <div className='p-5'>
          <CardMedia sx={{ height: '12rem' }} image={image || 'images/folder.png'} />
        </div>
        <CardContent className='bg-violet-100	'>
          <Typography variant='h6'>{title}</Typography>
          {/* <Typography variant='body2'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography> */}
        </CardContent>
      </Card>
    </div>
  )
}

export default FolderCard
