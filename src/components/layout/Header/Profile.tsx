import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface IProfile {
  showProfileData?: boolean
}

export const Profile: React.FC<IProfile> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Gustavo Felix</Text>
          <Text color="gray.300" fontSize="small">
            Igreja Adventista do Sétimo Dia
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Felix"
        src="https://avatars.githubusercontent.com/u/59146039?v=4"
      />
    </Flex>
  )
}
