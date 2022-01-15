import { Box, Divider } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//import { useEffect } from 'react'
import { ScheduleActionsBar } from '../../../components/schedule/ScheduleActionsBar'
import { ScheduleHeader } from '../../../components/schedule/ScheduleHeader'
import { CurrentScheduleProvider } from '../../../hooks/useCurrentSchedule'
import { Schedule as ScheduleProps } from '../../../hooks/useSchedules'
import { api } from '../../../services/api'

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale
}) => {
  try {
    const response = await api.get(`/churches/1/schedules/${query.id}`)

    const { schedule: rawSchedule } = response.data

    const schedule = {
      ...rawSchedule,
      statusFormatted: rawSchedule.status.toLowerCase(),
      date: new Date(rawSchedule.date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }

    return {
      props: {
        schedule,
        ...(await serverSideTranslations(locale, [
          'common',
          'schedule',
          'error',
          'success'
        ]))
      }
    }
  } catch (error) {
    console.log(error)
  }
}

interface ISchedule {
  schedule: ScheduleProps
}

const Schedule: NextPage<ISchedule> = ({ schedule }: ISchedule) => {
  // useEffect(() => '', [])

  return (
    <CurrentScheduleProvider scheduleData={schedule}>
      <Box>
        <ScheduleHeader />

        <Divider my="6" borderColor="gray.700" />

        <ScheduleActionsBar />

        <Divider my="6" borderColor="gray.700" />
      </Box>
    </CurrentScheduleProvider>
  )
}

export default Schedule
