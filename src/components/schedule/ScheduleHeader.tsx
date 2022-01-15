import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RiArrowLeftLine } from 'react-icons/ri'
import { useCurrentSchedule } from '../../hooks/useCurrentSchedule'
import ScheduleAuthor from './ScheduleAuthor'
import ScheduleStatusBadge from './ScheduleStatusBadge'

export const ScheduleHeader: React.FC = () => {
  const { back } = useRouter()
  const { schedule } = useCurrentSchedule()

  return (
    <Stack>
      <HStack>
        <IconButton
          aria-label={''}
          variant="ghost"
          icon={<Icon as={RiArrowLeftLine} fontSize="25" />}
          _hover={{ color: 'gray.900', backgroundColor: 'gray.50' }}
          onClick={back}
        />
        <Heading size="md" fontWeight="normal">
          {schedule.name}{' '}
          <ScheduleStatusBadge status={schedule.statusFormatted} />
        </Heading>
      </HStack>

      <Stack direction={['column', 'row']}>
        <ScheduleAuthor name={schedule.author.name} showBorder />
        <Text color="gray.300" fontSize="small" mx="1">
          {schedule.date}
        </Text>
      </Stack>
    </Stack>
  )
}
