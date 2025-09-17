import type { INotification } from '@/shared/stores/notification/types';

export const DEFAULT_ERROR_TITLE = 'Критическая ошибка';
export const DEFAULT_ERROR_MESSAGE = 'Что-то сломалось и выдалась эта ошибка О_О';

export const DEFAULT_ERROR: INotification = {
  type: 'error',
  title: DEFAULT_ERROR_TITLE,
  message: DEFAULT_ERROR_MESSAGE,
};
