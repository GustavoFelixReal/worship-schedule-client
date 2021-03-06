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
import { yupResolver } from '@hookform/resolvers/yup'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../components/common/Form/Input'
import { useSchedules } from '../../hooks/useSchedules'
import { createScheduleSchema } from '../../utils/validation/schemas'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'schedule', 'error']))
    }
  }
}

type CreateScheduleFormData = {
  name: string
  date: string
}

const CreateSchedule: NextPage = () => {
  const { t } = useTranslation()
  const { createSchedule } = useSchedules()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createScheduleSchema(t))
  })
  const { errors } = formState

  const handleCreateSchedule: SubmitHandler<CreateScheduleFormData> = async (
    values
  ) => {
    createSchedule(values)
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreateSchedule)}>
      <Heading size="md" fontWeight="normal">
        {t('create_schedule', { ns: 'schedule' })}
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input
            name="name"
            label={t('schedule_name', { ns: 'schedule' })}
            error={errors.name}
            defaultValue={`Agenda ${new Date().toLocaleDateString()}`}
            {...register('name')}
          />
          <Input
            name="date"
            type="date"
            label={t('schedule_date', { ns: 'schedule' })}
            error={errors.date}
            {...register('date')}
          />
        </SimpleGrid>
      </VStack>

      <Flex mt="8" justify="flex-end">
        <HStack spacing="4">
          <Link href="/schedules" passHref>
            <Button as="a" colorScheme="whiteAlpha">
              {t('cancel')}
            </Button>
          </Link>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={formState.isSubmitting}
          >
            {t('save')}
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default CreateSchedule
