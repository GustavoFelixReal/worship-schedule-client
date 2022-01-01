import { Button, Icon, HStack, IconButton } from '@chakra-ui/react'
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiThumbDownLine,
  RiThumbUpLine
} from 'react-icons/ri'
import { Schedule } from '../../hooks/useSchedules'
import Link from 'next/link'

interface IScheduleActionsBar {
  schedule: Schedule
}

export const ScheduleActionsBar: React.FC<IScheduleActionsBar> = ({
  schedule
}) => {
  return (
    <HStack>
      {schedule?.status !== 'PENDING' ? (
        <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
          <IconButton
            aria-label={''}
            icon={<Icon as={RiThumbUpLine} fontSize="25" />}
            colorScheme="green"
            p="1"
          />
          <IconButton
            aria-label={''}
            icon={<Icon as={RiThumbDownLine} fontSize="25" />}
            colorScheme="red"
            p="1"
          />
          <IconButton
            aria-label={''}
            icon={<Icon as={RiCloseLine} fontSize="25" />}
            colorScheme="orange"
            p="1"
          />
        </HStack>
      ) : (
        <>
          <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
            <Button
              leftIcon={<Icon as={RiCheckLine} fontSize="25" />}
              colorScheme="green"
            >
              Concluir agenda
            </Button>
            <IconButton
              aria-label={''}
              icon={<Icon as={RiCloseLine} fontSize="25" />}
              colorScheme="orange"
              p="1"
            />
          </HStack>
          <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
            <Link href={`/schedules/${schedule.id}/create/`}>
              <IconButton
                aria-label={''}
                icon={<Icon as={RiAddLine} fontSize="25" />}
                colorScheme="blue"
                p="1"
              />
            </Link>
          </HStack>
        </>
      )}
    </HStack>
  )
}
