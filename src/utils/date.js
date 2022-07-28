import common from '@/utils/common';

export default {
    formatDate(date, format = 'yyyy/MM/dd HH:mm:ss') {
        const data = {
            'M+': common.padZero(date.getMonth() + 1, 2),
            'd+': common.padZero(date.getDate(), 2),
            'H+': common.padZero(date.getHours(), 2),
            'm+': common.padZero(date.getMinutes(), 2),
            's+': common.padZero(date.getSeconds(), 2),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds(),
        };

        const matchYears = format.match(/y+/g);
        if (matchYears?.length === 1) {
            const matchYear = matchYears[0];
            const year = date.getFullYear()
                .toString()
                .substring(4 - matchYear.length);

            format = format.replace(matchYear, year);
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(data)) {
            const regExp = new RegExp(key, 'g');
            const matchArray = format.match(regExp);

            if (matchArray?.length === 1) {
                format = format.replace(matchArray[0], value);
            }
        }

        return format;
    },
};
