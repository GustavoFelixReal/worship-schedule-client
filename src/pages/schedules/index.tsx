import { Box, Divider, Heading } from '@chakra-ui/react'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SchedulesActionsBar } from '../../components/schedule/SchedulesActionsBar'
import SchedulesTable from '../../components/schedule/SchedulesTable'
import { useSchedules } from '../../hooks/useSchedules'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'schedule', 'error']))
    }
  }
}

const Schedules: NextPage = () => {
  const { t } = useTranslation('schedule')
  const { schedules } = useSchedules()

  return (
    <Box>
      <Heading size="md" fontWeight="normal">
        {t('schedules')}
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <SchedulesActionsBar />

      <Divider my="6" borderColor="gray.700" />

      <SchedulesTable schedules={schedules} />
    </Box>
  )
}

export default Schedules
