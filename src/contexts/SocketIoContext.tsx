import React, { createContext, ReactNode, useContext } from 'react'
import { io, Socket } from 'socket.io-client'

interface IoProviderProps {
  children: ReactNode
}

export const IoContext = createContext<Socket>({} as Socket)
export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL)

export function IoProvider({ children }: IoProviderProps) {
  return <IoContext.Provider value={socket}>{children}</IoContext.Provider>
}

export function useIo() {
  const context = useContext(IoContext)

  return context
}
