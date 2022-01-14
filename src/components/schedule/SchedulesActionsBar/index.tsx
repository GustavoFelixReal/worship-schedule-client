import { Icon, IconButton, Stack } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { SchedulesDateFilter } from './SchedulesDateFilter'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export const SchedulesActionsBar: React.FC = () => {
  const { t } = useTranslation('schedule')

  return (
    <Stack direction={['column', 'row']} justify={['center', 'start']}>
      <Stack
        borderRightWidth={[0, 1]}
        borderColor="gray.700"
        pr="2"
        align="center"
      >
        <Link href="/schedules/create">
          <IconButton
            as="a"
            aria-label={t('create_schedule')}
            icon={<Icon as={RiAddLine} fontSize="25" />}
            colorScheme="blue"
            p="1"
            width={['100%', 'fit-content']}
          />
        </Link>
      </Stack>
      <SchedulesDateFilter />
    </Stack>
  )
}
