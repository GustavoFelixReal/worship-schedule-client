import { createContext, useContext } from 'react'
import { io, Socket } from 'socket.io-client'

export const IoContext = createContext<Socket>({} as Socket)
export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL)

export const useIo = () => useContext(IoContext)
