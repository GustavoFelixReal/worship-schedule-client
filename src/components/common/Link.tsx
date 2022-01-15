import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
interface ILink extends LinkProps {
  children: React.ReactNode
}

export function Link({ children, ...props }: ILink) {
  return (
    <NextLink {...props}>
      <ChakraLink>{children}</ChakraLink>
    </NextLink>
  )
}
