import { Text } from '@chakra-ui/react'

export const Logo: React.FC = () => {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Worship
      <Text as="span" color="blue.400" ml="1">
        .
      </Text>
    </Text>
  )
}
