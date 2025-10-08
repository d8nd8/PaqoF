import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";


import "dayjs/locale/ru";
import "dayjs/locale/en";
import { i18n } from '@/i18n'

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);


dayjs.locale(i18n.language);

i18n.on("languageChanged", (lng) => {
  dayjs.locale(lng);
});

export default dayjs;
