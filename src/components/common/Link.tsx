import NextLink, { LinkProps } from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
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
