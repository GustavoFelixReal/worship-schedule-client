import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface INavLink extends ChakraLinkProps {
  icon: React.ElementType
  children: string
  href: string
}

export const NavLink: React.FC<INavLink> = ({
  children,
  href,
  icon,
  ...rest
}) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="28" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
