import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { toast } from 'react-toastify'
import { useIo } from '../contexts/SocketIoContext'

type Schedule = {
  id: number
  churchId: number
  name: string
  status: string
  createdAt: string
  createdBy: number
  updatedAt: string
  updatedBy: number
  isArchived: boolean
}

interface SocketResponse {
  schedules?: Schedule[]
  createSchedule: (name: string, churchId: number, userId: number) => void
}

interface ScheduleEmitter {
  schedule?: Schedule
}

interface SchedulesProviderProps {
  children: React.ReactNode
}

export const SchedulesContext = createContext({} as SocketResponse)

export function SchedulesProvider({ children }: SchedulesProviderProps) {
  const socket = useIo()

  const [schedules, setSchedules] = useState<Schedule[]>([])

  useEffect(() => {
    const params = { churchId: 1 }

    socket.emit('join_church', { params }, ({ schedules }: SocketResponse) => {
      setSchedules([...schedules])
    })
  }, [socket, setSchedules])

  useEffect(() => {
    socket.on('exception', (data) => {
      toast.info(data.errors.join(', '))
    })

    socket.on('schedule', ({ schedule }: ScheduleEmitter) => {
      setSchedules([...schedules, schedule])
    })
  }, [schedules, socket])

  const createSchedule = useCallback(
    (name: string, churchId: number, userId: number) => {
      const params = { name, churchId, userId }

      socket.emit('create_schedule', { params })
    },
    []
  )

  return (
    <SchedulesContext.Provider value={{ schedules, createSchedule }}>
      {children}
    </SchedulesContext.Provider>
  )
}

export const useSchedules = () => useContext(SchedulesContext)
