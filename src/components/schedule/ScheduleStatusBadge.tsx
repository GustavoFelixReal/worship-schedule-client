import { Badge } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

interface IScheduleStatusBadge {
  status: string
}

const ScheduleStatusBadge: React.FC<IScheduleStatusBadge> = ({ status }) => {
  const { t } = useTranslation('schedule')

  const badgeColorScheme = {
    pending: 'yellow',
    approved: 'green',
    rejected: 'red',
    canceled: 'orange',
    completed: 'blue'
  }

  return (
    <Badge colorScheme={badgeColorScheme[status]} mx="1">
      {t(status)}
    </Badge>
  )
}

export default ScheduleStatusBadge
