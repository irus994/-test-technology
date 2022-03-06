
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const getDayInfo = (date) => {
    let weekCount;
    const day = date.substring(0, 2);
    const month = date.substring(3, 5);
    const year = date.substring(6, 10);
    const resultData = new Date(year + ', ' + month + ', ' + day);
    const weekDay = daysOfWeek[resultData.getDay()];
    const monthName = months[resultData.getMonth()]
    if (day <= 7) {
        weekCount = '1';
    } else if (day > 7 && day <= 14) {
        weekCount = '2';
    } else if (day > 14 && day <= 21) {
        weekCount = '3';
    } else if (day > 21) {
        weekCount = '4';
    }

    return `${weekDay}, ${weekCount} неделя ${monthName} ${year} года`;
};

console.log(getDayInfo('01.01.2022'))


const buttonConversion = document.querySelector('.button-conversion')

const onConversion = () => {
    const userData = document.querySelector('#userDate');
    const resultData = document.querySelector('#resultDate');

    if (userData.value) {
        resultData.value = getDayInfo(userData.value.toString());
    } else {
        resultData.value = 'Введите данные';
    }


}

buttonConversion.addEventListener('click', onConversion);