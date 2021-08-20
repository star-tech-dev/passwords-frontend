import moment from 'moment'
import 'moment/locale/ru'
import { withTranslation } from 'react-i18next'

const i18n = withTranslation()

console.log('i18n', i18n)

moment.locale('ru')

export default moment
