import './styles/style.scss';
import './styles/map.scss';
import { getDom } from './getDom';
import { getDataCovid } from './getDataCovid';
import { getStatistics } from './getStatistics';
import { showStatisticsCountry } from './showStatisticsCountry';
import { searchCountry } from './searchCountry';
import { selectStatistics } from './selectStatistics';
import { toggleTable } from './switches/toggleTable';
import { switchTable } from './switches/switchTable';

// график
import { getSheludeStatistics } from './schedule/getSheludeStatistics';

import { getMap } from './map/getMap';

getDom();

// запрос к axios и получение данных
// export {data}
const data = getDataCovid();

// передача данных в функцию для отрисовки контента отрисовывает в списке и таблице
getStatistics(data);

// отображение информации по клику на страну из списка
showStatisticsCountry(data);

// выбор показателя
selectStatistics(data);

// поиск страны
searchCountry(data);

// запрос на временную историю
// getSchedule(); - здесь не используется

// отрисовка графика
getSheludeStatistics();

// карта
getMap();

// переключение таблиц
toggleTable();

// переключение секции
switchTable()
