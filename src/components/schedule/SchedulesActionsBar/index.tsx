import { HStack, Icon, IconButton, Stack } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { SchedulesDateFilter } from './SchedulesDateFilter'

export const SchedulesActionsBar: React.FC = () => {
  return (
    <Stack direction={['column', 'row']} justify={['center', 'start']}>
      <Stack
        borderRightWidth={[0, 1]}
        borderColor="gray.700"
        pr="2"
        align="center"
      >
        <IconButton
          aria-label={''}
          icon={<Icon as={RiAddLine} fontSize="25" />}
          colorScheme="blue"
          p="1"
          width={['100%', 'fit-content']}
        />
      </Stack>
      <SchedulesDateFilter />
    </Stack>
  )
}
