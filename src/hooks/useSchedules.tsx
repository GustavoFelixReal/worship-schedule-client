import { useTranslation } from 'next-i18next'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { toast } from 'react-toastify'
import { useIo } from '../contexts/SocketIoContext'
import { api } from '../services/api'

export type Schedule = {
  id: number
  churchId: number
  name: string
  date: string
  status: string
  statusFormatted?: string
  createdAt: string
  createdBy: number
  updatedAt: string
  updatedBy: number
  isArchived: boolean
  author?: {
    name: string
  }
  maintainer?: {
    name: string
  }
}

type CreateScheduleParams = {
  name: string
  date: string
}

interface SocketResponse {
  schedules?: Schedule[]
  createSchedule: (schedule: CreateScheduleParams) => void
  changeScheduleStatus: (scheduleId: number, status: string) => void
}

interface ScheduleEmitter {
  schedule?: Schedule
}

interface SchedulesProviderProps {
  children: React.ReactNode
}

export const SchedulesContext = createContext({} as SocketResponse)

export const SchedulesProvider: React.FC<SchedulesProviderProps> = ({
  children
}) => {
  const { t } = useTranslation('success')

  const socket = useIo()
  const [schedules, setSchedules] = useState<Schedule[]>([])

  const getSchedules = useCallback(() => {
    const params = { churchId: 1 }

    socket?.emit('join_church', { params }, ({ schedules }: SocketResponse) => {
      const newSchedules = schedules.map((schedule) => {
        return {
          ...schedule,
          statusFormatted: schedule.status.toLowerCase(),
          date: new Date(schedule.date).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        }
      })

      setSchedules([...newSchedules])
    })
  }, [socket])

  const createSchedule = useCallback(
    (schedule: CreateScheduleParams) => {
      const params = { ...schedule, churchId: 1, userId: 1 }

      socket?.emit('create_schedule', { params })
    },
    [socket]
  )

  const changeScheduleStatus = useCallback(
    async (scheduleId: number, status: string) => {
      const params = { churchId: 1, scheduleId, status }

      await api
        .put('changeStatus', params)
        .then(() => {
          const schedule = schedules.find(
            (schedule) => schedule.id === scheduleId
          )

          const scheduleIndex = schedules.findIndex(
            (schedule) => schedule.id === scheduleId
          )

          const newSchedules = schedules

          newSchedules.splice(scheduleIndex, 1)

          const newSchedule = {
            ...schedule,
            status,
            statusFormatted: status.toLowerCase()
          }

          setSchedules([...newSchedules, newSchedule])

          toast.success(t('schedule_status_updated_successfully'))
        })
        .catch((error) => console.log(error))
    },
    [schedules]
  )

  useEffect(getSchedules, [])

  useEffect(() => {
    // socket.on('exception', (data) => {
    //   toast.info(data.errors.join(', '))
    // })

    socket?.on('schedule', ({ schedule }: ScheduleEmitter) => {
      setSchedules((previousSchedules) => [...previousSchedules, schedule])
    })
  }, [socket, setSchedules])

  return (
    <SchedulesContext.Provider
      value={{
        schedules,
        createSchedule,
        changeScheduleStatus
      }}
    >
      {children}
    </SchedulesContext.Provider>
  )
}

export const useSchedules = () => useContext(SchedulesContext)
