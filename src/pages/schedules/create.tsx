import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/common/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateSchedule() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState
  
  return (
    <>
      <Heading size="lg" fontWeight="normal">
        Criar usuário
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input
            name="name"
            label="Nome completo"
            error={errors.name}
            {...register('name')}
          />
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação da senha"
            error={errors.password_confirmation}
            {...register('password_confirmation')}
          />
        </SimpleGrid>
      </VStack>

      <Flex mt="8" justify="flex-end">
        <HStack spacing="4">
          <Link href="/schedules" passHref>
            <Button as="a" colorScheme="whiteAlpha">
              Cancelar
            </Button>
          </Link>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={formState.isSubmitting}
          >
            Salvar
          </Button>
        </HStack>
      </Flex>
    </>
  )
}
