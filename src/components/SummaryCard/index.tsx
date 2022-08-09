import { Card } from 'react-bootstrap'
import styles from './summaryCard.module.scss'

const SummaryCard = (props: {
  label?: string
  count?: string | number
  icon?: any
  backgroundColor?: string
}) => {
  return (
    <Card>
      <div
        className=" rounded overflow-hidden shadow-lg m-4 h-[180px] w-[220px]"
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <div className='mt-4 flex items-center justify-center'>
          {props.icon}
          
        </div>
        <div className="px-6 py-4">
          <div className="text-gray-700 font-bold text-2xl text-center m-4">
            {props.count}
          </div>
          <div className=" text-xl m-2 text-center"> {props.label}</div>
        </div>
      </div>
    </Card>
  )
}
export default SummaryCard
