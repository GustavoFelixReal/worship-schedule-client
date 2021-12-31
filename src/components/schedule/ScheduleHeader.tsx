import { Avatar, Badge, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { Schedule } from '../../hooks/useSchedules'

interface IScheduleHeader {
  schedule: Schedule
}

export const ScheduleHeader: React.FC<IScheduleHeader> = ({ schedule }) => {
  return (
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
        <Text color="gray.300" fontSize="small" mx="1">
          {schedule.date}
        </Text>
      </Stack>
    </Stack>
  )
}
