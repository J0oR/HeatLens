import axios from 'axios';

const BASE_URL = 'https://global-warming.org/api';


const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const formatTemperatureData = (data) => {
  return data.map(item => {
    const floatTime = parseFloat(item.time); // ora anche time è numero
    const year = Math.floor(floatTime);
    const monthFraction = floatTime - year;
    const month = Math.floor(monthFraction * 12);
    const formattedTime = `${year} ${monthNames[month]}`;

    return {
      ...item,
      time: floatTime,              // <--- qui lo rendi numero
      timeFormatted: formattedTime
    };
  });
};


export const fetchTemperature = async () => {
  const { data } = await axios.get(`${BASE_URL}/temperature-api`);
  return formatTemperatureData(data.result); // o adattalo secondo struttura ricevuta
};

export const fetchCO2 = async () => {
  const { data } = await axios.get(`${BASE_URL}/co2-api`);
  const formattedData = data.co2.map(item => ({
    
    timeFormatted: `${item.year} ${monthNames[item.month - 1]} ${item.day.padStart(2, '0')}`,  // Formatta la data come stringa 'YYYY-MM-DD'
    time: parseInt(item.year) + (parseInt(item.month) - 1) / 12 + (parseInt(item.day) - 1) / 365,
    cycle: item.cycle,
    trend: item.trend,
  }));
  return formattedData;
};

// aggiungi fetchMethane, fetchNitrous, ecc. se ti servono

export const fetchMethane = async () => {
  const { data } = await axios.get(`${BASE_URL}/methane-api`);
  const formattedData = data.methane.map(item => {
    const floatTime = parseFloat(item.date);
    const timeSplit = item.date.split('.');
    const year = timeSplit[0];
    const month = timeSplit[1];
    const formattedTime = `${year} ${monthNames[month - 1]}`;

    return {
      time: floatTime,
      timeFormatted: formattedTime,
      average: parseFloat(item.average),
      trend: parseFloat(item.trend)
    };
  });

 

  return formattedData;
};
