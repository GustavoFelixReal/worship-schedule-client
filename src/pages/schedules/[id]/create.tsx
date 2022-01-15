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
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../../components/common/Form/Input'
//import { useSchedules } from '../../../hooks/useSchedules'
import { createScheduleItemSchema } from '../../../utils/validation/schemas'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'schedule', 'error']))
    }
  }
}

interface CreateScheduleItemFormData {
  type: string
  name: string
  order: number
  fileName: string
}

const CreateScheduleItem: NextPage = () => {
  const { t } = useTranslation()
  //const { createSchedule } = useSchedules()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createScheduleItemSchema(t))
  })
  const { errors } = formState

  const handleCreateScheduleItem: SubmitHandler<CreateScheduleItemFormData> =
    async (values) => {
      console.log(values)
      //createSchedule(values)
    }

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreateScheduleItem)}>
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

export default CreateScheduleItem
