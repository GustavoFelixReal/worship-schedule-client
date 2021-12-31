import { Box } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { Schedule as ScheduleProps } from '../../hooks/useSchedules'
import { api } from '../../services/api'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const response = await api.get(`/churches/1/schedules/${query.id}`)

    return {
      props: {
        schedule: response.data.schedule
      }
    }
  } catch (error) {
    console.log(error)
  }
}

interface ISchedule {
  schedule: ScheduleProps
}

const Schedule: NextPage<ISchedule> = ({ schedule }: ISchedule) => {
  console.log(schedule)

  return <Box>Olá para todos</Box>
}

export default Schedule
