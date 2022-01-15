import { createContext, useCallback, useContext, useState } from 'react'
import { Schedule } from './useSchedules'

interface ICurrentScheduleContext {
  schedule: Schedule
  updateSchedule: (schedule: Schedule) => void
}

interface ICurrentScheduleProvider {
  scheduleData: Schedule
  children: React.ReactNode
}

export const CurrentScheduleContext = createContext(
  {} as ICurrentScheduleContext
)

export const CurrentScheduleProvider: React.FC<ICurrentScheduleProvider> = ({
  children,
  scheduleData
}) => {
  const [schedule, setSchedule] = useState(scheduleData)

  const updateSchedule = useCallback(
    (schedule: Schedule) => {
      setSchedule(schedule)
    },
    [setSchedule]
  )

  return (
    <CurrentScheduleContext.Provider value={{ schedule, updateSchedule }}>
      {children}
    </CurrentScheduleContext.Provider>
  )
}

export const useCurrentSchedule = () => useContext(CurrentScheduleContext)
