import { Button, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export const NotificationsNav: React.FC = () => {
  return (
    <HStack
      spacing={['1', '2']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Link href="/schedules/create" passHref>
        <Button
          as="a"
          variant="outline"
          p="1"
          mx="1"
          _hover={{ color: 'gray.900', backgroundColor: 'gray.50' }}
        >
          <Icon as={RiAddLine} fontSize="25" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        p="1"
        mx="1"
        _hover={{ color: 'gray.900', backgroundColor: 'gray.50' }}
      >
        <Icon as={RiNotificationLine} fontSize="20" />
      </Button>
      <Button
        variant="ghost"
        p="1"
        mx="1"
        _hover={{ color: 'gray.900', backgroundColor: 'gray.50' }}
      >
        <Icon as={RiUserAddLine} fontSize="20" />
      </Button>
    </HStack>
  )
}
