import './styles/style.scss';
import {getDom} from './getDom';
import {getDataCovid} from './getDataCovid';
import {getStatistics} from './getStatistics';
import {showStatisticsCountry} from './showStatisticsCountry';
import {searchCountry} from './searchCountry';
import {selectStatistics} from './selectStatistics';

// график
import {getSheludeStatistics} from './schedule/getSheludeStatistics';

getDom();

// запрос к axios и получение данных
// export {data}
let data = getDataCovid();

// передача данных в функцию для отрисовки контента отрисовывает в списке и таблице
getStatistics(data);

// отображение информации по клику на страну из списка
showStatisticsCountry(data);

//выбор показателя
selectStatistics(data);

// поиск страны
searchCountry(data);

// запрос на временную историю
// getSchedule(); - здесь не используется

// отрисовка графика
getSheludeStatistics();
