import dayjs from 'dayjs';

const getCurrentDate = () => dayjs();

const getCurrentDateTimestamp = () => dayjs().unix();

const getCurrentDateTimestampMS = () => dayjs().valueOf();
