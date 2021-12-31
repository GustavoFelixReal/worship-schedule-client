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
  console.log(schedule)

  return (
    <Box>
      <Stack>
        <Heading size="sm" fontWeight="normal">
          {schedule.name}{' '}
          <Badge colorScheme="yellow" mx="1">
            {schedule.status}
          </Badge>
        </Heading>

        <Stack direction={['column', 'row']}>
          <HStack borderRightWidth={[0, 1]} borderColor="gray.700" spacing="1">
            <Avatar size="xs" name={schedule.author.name} />
            <Text color="gray.300" fontSize="small" px="2">
              {schedule.author.name}
            </Text>
          </HStack>
          <Text
            color="gray.300"
            fontSize="small"
            mx="1"
          >
            {schedule.date}
          </Text>
        </Stack>
      </Stack>

      <Divider my="6" borderColor="gray.700" />
    </Box>
  )
}

export default Schedule
