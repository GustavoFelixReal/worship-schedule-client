import { Box, Stack, Text } from '@chakra-ui/react'

interface INavSection {
  title: string
  children: React.ReactNode
}

export const NavSection: React.FC<INavSection> = ({ children, title }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
