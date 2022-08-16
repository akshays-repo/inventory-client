// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import withAuth from 'src/hoc/withAuth'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import Folders from './folders'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12}>
          {/* <Table /> */}
          <Folders />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default withAuth(Dashboard)
