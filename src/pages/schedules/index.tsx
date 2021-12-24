import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useIo } from '../../contexts/SocketIoContext'

interface ScheduleItem {
  id: number
  scheduleId: number
  type: string
  status: string
  name: string
  order: number
  fileName: string
  createdAt: string
  createdBy: number
  updatedAt: string
  updatedBy: number
  isDeleted: boolean
}

interface SocketResponse {
  scheduleItems?: ScheduleItem[]
}

interface ScheduleEmitter {
  scheduleItem?: ScheduleItem
}

export default function Schedule() {
  const router = useRouter()
  const socket = useIo()

  const [checkedItems, setCheckedItems] = useState([])
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([])

  console.log(router.query)

  // useEffect(() => {
  //   const params = { churchId: 1, scheduleId: router.query.id }

  //   socket.emit(
  //     'get_schedule_items',
  //     { params },
  //     ({ scheduleItems }: SocketResponse) => {
  //       setScheduleItems(Array.isArray(scheduleItems) ? [...scheduleItems] : [])
  //     }
  //   )
  // }, [])

  // const handleToggle = useCallback(
  //   (id: number) => {
  //     const newCheckedItems = checkedItems
  //     const checkedItem = newCheckedItems.findIndex(
  //       (checked) => checked.id === id
  //     )

  //     if (checkedItem) {
  //       newCheckedItems.splice(checkedItem, 1)
  //     } else {
  //       newCheckedItems.push(id)
  //     }

  //     setCheckedItems([...newCheckedItems])
  //   },
  //   [checkedItems]
  // )

  return (
    <>
      {scheduleItems.map((scheduleItem) => (
        <h1 key={scheduleItem.scheduleId}>Item</h1>
      ))}
    </>
  )
}
