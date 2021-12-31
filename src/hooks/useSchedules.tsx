import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { useIo } from '../contexts/SocketIoContext'

export type Schedule = {
  id: number
  churchId: number
  name: string
  date: string
  status: string
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
  const socket = useIo()
  const [schedules, setSchedules] = useState<Schedule[]>([])

  const getSchedules = useCallback(() => {
    const params = { churchId: 1 }

    socket?.emit('join_church', { params }, ({ schedules }: SocketResponse) => {
      setSchedules([...schedules])
    })
  }, [socket])

  const createSchedule = useCallback(
    (schedule: CreateScheduleParams) => {
      const params = { ...schedule, churchId: 1, userId: 1 }

      socket?.emit('create_schedule', { params })
    },
    [socket]
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
    <SchedulesContext.Provider value={{ schedules, createSchedule }}>
      {children}
    </SchedulesContext.Provider>
  )
}

export const useSchedules = () => useContext(SchedulesContext)
