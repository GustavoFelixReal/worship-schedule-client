import {
  Box,
  Heading,
  Divider,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Badge,
  useBreakpointValue
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Link } from '../../components/common/Link'
import { SchedulesActionsBar } from '../../components/schedule/SchedulesActionsBar'
import { useSchedules } from '../../hooks/useSchedules'

const Schedules: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  const { schedules } = useSchedules()

  return (
    <Box>
      <Heading size="md" fontWeight="normal">
        Agendas
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <SchedulesActionsBar />

      <Divider my="6" borderColor="gray.700" />
      
      <Table colorScheme="whiteAlpha" variant="striped" size="sm">
        <Thead>
          <Tr>
            {/*<Th px={['4', '4', '6']} color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th> */}
            <Th>Agenda</Th>
            <Th>Situação</Th>
            {isWideVersion && <Th>Data</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {schedules.map((schedule) => (
            <Tr key={schedule.id}>
              {/* <Td px={['4', '4', '6']}>
                <Checkbox colorScheme="pink" />
              </Td> */}
              <Td>
                <Link href={`schedules/${schedule.id}`}>{schedule.name}</Link>
              </Td>
              <Td>
                <Badge colorScheme="yellow">{schedule.status}</Badge>
              </Td>
              {isWideVersion && <Td>{schedule.date}</Td>}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Schedules
