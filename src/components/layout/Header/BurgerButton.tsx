import { Icon, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext";

export const BurgerButton: React.FC = () => {
  const { onOpen } = useSidebarDrawer()

  return (
    <IconButton
      aria-label="Open navigation"
      icon={<Icon as={RiMenuLine} />}
      fontSize="24"
      variant="unstyled"
      onClick={onOpen}
      mr="2"
    />
  )
}
