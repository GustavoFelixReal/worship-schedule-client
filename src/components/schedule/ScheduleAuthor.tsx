import { Avatar, HStack, Text } from '@chakra-ui/react'

interface IScheduleAuthor {
  name: string
  showBorder?: boolean
}

const ScheduleAuthor: React.FC<IScheduleAuthor> = ({
  name,
  showBorder = false
}) => {
  return (
    <HStack
      borderRightWidth={showBorder ? [0, 1] : 0}
      borderColor="gray.700"
      spacing="1"
    >
      <Avatar size="xs" name={name} />
      <Text color="gray.300" fontSize="small" px="2">
        {name}
      </Text>
    </HStack>
  )
}

export default ScheduleAuthor
