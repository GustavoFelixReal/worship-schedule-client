import { Input, Icon, IconButton, Stack } from '@chakra-ui/react'
import { RiFilterLine } from 'react-icons/ri'

import moment from 'moment'

export const SchedulesDateFilter: React.FC = () => {
  return (
    <Stack
      direction={['column', 'row']}
      //borderRightWidth={[0, 1]}
      borderColor="gray.700"
      pr="2"
      align="center"
    >
      <Input
        type="date"
        name="date"
        defaultValue={moment().format('YYYY-MM-DD')}
        variant="flushed"
      />
      <IconButton
        aria-label={''}
        icon={<Icon as={RiFilterLine} fontSize="25" />}
        variant="ghost"
        p="1"
        width={['100%', 'fit-content']}
        _hover={{ color: 'gray.900', backgroundColor: 'gray.50' }}
      />
    </Stack>
  )
}
