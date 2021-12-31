import {
  Avatar,
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { ScheduleActionsBar } from '../../../components/schedule/ScheduleActionsBar'
import { ScheduleHeader } from '../../../components/schedule/ScheduleHeader'
import { Schedule as ScheduleProps } from '../../../hooks/useSchedules'
import { api } from '../../../services/api'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const response = await api.get(`/churches/1/schedules/${query.id}`)

    const { schedule: rawSchedule } = response.data

    const schedule = {
      ...rawSchedule,
      date: new Date(rawSchedule.date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }

    return {
      props: {
        schedule
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
  return (
    <Box>
      <ScheduleHeader schedule={schedule} />

      <Divider my="6" borderColor="gray.700" />

      <ScheduleActionsBar schedule={schedule} />

      <Divider my="6" borderColor="gray.700" />

      
    </Box>
  )
}

export default Schedule
