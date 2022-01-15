import { HStack, Icon, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { useCallback } from 'react'
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiThumbDownLine,
  RiThumbUpLine
} from 'react-icons/ri'
import { useCurrentSchedule } from '../../hooks/useCurrentSchedule'
import { useSchedules } from '../../hooks/useSchedules'
import { submitEffect } from '../../utils/helpers/submit'

export const ScheduleActionsBar: React.FC = () => {
  const { changeScheduleStatus } = useSchedules()
  const { schedule, updateSchedule } = useCurrentSchedule()

  const actionsDisabled = ['COMPLETED', 'CANCELED', 'REJECTED'].includes(
    schedule.status
  )

  const handleStatusUpdate = useCallback((status: string) => {
    const newSchedule = {
      ...schedule,
      status,
      statusFormatted: status.toLowerCase()
    }

    console.log(newSchedule)

    updateSchedule(newSchedule)
  }, [])

  return (
    <HStack>
      {schedule?.status === 'PENDING' ? (
        <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
          <IconButton
            aria-label={''}
            icon={<Icon as={RiThumbUpLine} fontSize="25" />}
            colorScheme="green"
            p="1"
            onClick={() =>
              submitEffect(
                () => changeScheduleStatus(schedule.id, 'APPROVED'),
                () => handleStatusUpdate('APPROVED')
              )
            }
          />
          <IconButton
            aria-label={''}
            icon={<Icon as={RiThumbDownLine} fontSize="25" />}
            colorScheme="red"
            p="1"
            onClick={() =>
              submitEffect(
                () => changeScheduleStatus(schedule.id, 'REJECTED'),
                () => handleStatusUpdate('REJECTED')
              )
            }
          />
          <IconButton
            aria-label={''}
            icon={<Icon as={RiCloseLine} fontSize="25" />}
            colorScheme="orange"
            p="1"
            onClick={() =>
              submitEffect(
                () => changeScheduleStatus(schedule.id, 'CANCELED'),
                () => handleStatusUpdate('CANCELED')
              )
            }
          />
        </HStack>
      ) : (
        <>
          <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
            <IconButton
              aria-label={''}
              icon={<Icon as={RiCheckLine} fontSize="25" />}
              colorScheme="green"
              p="1"
              onClick={() =>
                submitEffect(
                  () => changeScheduleStatus(schedule.id, 'COMPLETED'),
                  () => handleStatusUpdate('COMPLETED')
                )
              }
              disabled={actionsDisabled}
            />
            <IconButton
              aria-label={''}
              icon={<Icon as={RiCloseLine} fontSize="25" />}
              colorScheme="orange"
              p="1"
              onClick={() =>
                submitEffect(
                  () => changeScheduleStatus(schedule.id, 'CANCELED'),
                  () => handleStatusUpdate('CANCELED')
                )
              }
              disabled={actionsDisabled}
            />
          </HStack>
          <HStack borderRightWidth={1} borderColor="gray.700" pr="2">
            <Link href={`/schedules/${schedule.id}/create/`} passHref>
              <IconButton
                aria-label={''}
                icon={<Icon as={RiAddLine} fontSize="25" />}
                colorScheme="blue"
                p="1"
                disabled={actionsDisabled}
              />
            </Link>
          </HStack>
        </>
      )}
    </HStack>
  )
}
