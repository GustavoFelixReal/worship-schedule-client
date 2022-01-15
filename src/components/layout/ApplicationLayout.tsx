import { Box, Flex } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../../contexts/SidebarDrawerContext'
import { SchedulesProvider } from '../../hooks/useSchedules'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface IApplicationLayout {
  children: React.ReactNode
}

export const ApplicationLayout: React.FC<IApplicationLayout> = ({
  children
}) => {
  return (
    <SidebarDrawerProvider>
      <SchedulesProvider>
        <Flex direction="column" h="100vh">
          <Header />

          <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
              {children}
            </Box>
          </Flex>
        </Flex>
      </SchedulesProvider>
    </SidebarDrawerProvider>
  )
}
