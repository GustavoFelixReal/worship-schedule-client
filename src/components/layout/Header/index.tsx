import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { BurgerButton } from './BurgerButton'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export const Header: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  const showBurgerButton = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {showBurgerButton && <BurgerButton />}

      <Logo />

      <Flex align="center" ml="auto">
        {isWideVersion && <NotificationsNav />}
        {isWideVersion && <Profile />}
      </Flex>
    </Flex>
  )
}
