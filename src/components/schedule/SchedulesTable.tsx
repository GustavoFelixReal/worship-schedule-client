import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import { Schedule } from '../../hooks/useSchedules'
import { Link } from '../common/Link'
import ScheduleAuthor from './ScheduleAuthor'
import ScheduleStatusBadge from './ScheduleStatusBadge'

interface IScheduleTable {
  schedules: Schedule[]
}

const SchedulesTable: React.FC<IScheduleTable> = ({ schedules }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Table colorScheme="whiteAlpha" variant="striped" size="sm">
      <Thead>
        <Tr>
          {/*<Th px={['4', '4', '6']} color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th> */}
          <Th>Agenda</Th>
          <Th>Situação</Th>
          <Th>Autor</Th>
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
              <ScheduleStatusBadge status={schedule.statusFormatted} />
            </Td>
            <Td>
              <ScheduleAuthor name={schedule.author.name} />
            </Td>
            {isWideVersion && <Td>{schedule.date}</Td>}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default SchedulesTable
