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
    <Card
      onClick={() => {
        Router.push('folders/items')
      }}
    >
      <CardMedia sx={{ height: '14.5625rem' }} image={image} />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant='body2'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FolderCard
