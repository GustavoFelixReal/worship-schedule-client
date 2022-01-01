import { TFunction } from 'next-i18next'
import * as yup from 'yup'

export const createScheduleSchema = (t: TFunction) =>
  yup.object().shape({
    name: yup.string().required(t('schedule_name_required', { ns: 'error' })),
    date: yup.string().required(t('schedule_date_required', { ns: 'error' }))
  })

export const createScheduleItemSchema = (t: TFunction) =>
  yup.object().shape({
    name: yup.string().required(t('schedule_name_required', { ns: 'error' })),
    date: yup.string().required(t('schedule_date_required', { ns: 'error' }))
  })
