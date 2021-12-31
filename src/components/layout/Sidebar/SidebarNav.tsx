import {
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
  RiCalendarTodoLine
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { Stack } from '@chakra-ui/react'

export const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiCalendarTodoLine} href="/schedules">
          Agendas
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
