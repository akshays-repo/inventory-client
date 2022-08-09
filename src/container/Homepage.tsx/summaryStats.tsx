import { Col, Row } from 'react-bootstrap'

import { BsStack } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import { IoIosFolder } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'
import AppContainer from '../../components/container'
import SummaryCard from '../../components/SummaryCard'

const SummaryStats = () => {
  const summaryData = [
    {
      label: 'Items',
      count: '1',
      icon: <MdOutlineShoppingBag />,
      backgroundColor: '#ff8080',
    },
    {
      label: 'Folders',
      count: '2',
      icon: <IoIosFolder />,
      backgroundColor: '#80c0ff',
    },
    {
      label: 'Total Quantity',
      count: '98',
      icon: <BsStack />,
      backgroundColor: '#f9ff80',
    },

    {
      label: 'Total Value',
      count: '₹6.5K',
      icon: <FaMoneyBillWave />,
      backgroundColor: '#80ffad',
    },
  ]
  return (
    <AppContainer>
      <div className="flex flex-row">
        <Col >
          <SummaryCard
            label={summaryData[0].label}
            count={summaryData[0].count}
            backgroundColor={summaryData[0].backgroundColor}
            icon={summaryData[0].icon}
          />
        </Col>
        <Col >
          <SummaryCard
            label={summaryData[1].label}
            count={summaryData[1].count}
            backgroundColor={summaryData[1].backgroundColor}
            icon={summaryData[1].icon}
          />
        </Col>{' '}
        <Col >
          <SummaryCard
            label={summaryData[2].label}
            count={summaryData[2].count}
            backgroundColor={summaryData[2].backgroundColor}
            icon={summaryData[2].icon}
          />
        </Col>{' '}
        <Col >
          <SummaryCard
            label={summaryData[3].label}
            count={summaryData[3].count}
            icon={summaryData[3].icon}
            backgroundColor={summaryData[3].backgroundColor}
          />
        </Col>
      </div>
    </AppContainer>
  )
}

export default SummaryStats
