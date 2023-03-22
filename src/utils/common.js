export default {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    hexToByteArray(hex) {
        const bytes = [];

        for (let c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substr(c, 2), 16));
        }

        return bytes;
    },
    hexToUint8Array(hex) {
        return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(h => (parseInt(h, 16))));
    },
    padZero(value, length) {
        return value.toString().padStart(length, 0);
    },
    // 計算日期期間
    calculateDatePeriod(start, end) {
        if (start > end)
            [start, end] = [end, start];

        const obj = {
            years: end.getFullYear() - start.getFullYear(),
            months: end.getMonth() - start.getMonth(),
            days: end.getDate() - start.getDate(),
        };

        if (obj.days < 0) {
            obj.months -= 1;
            // 補前一個月的天數
            obj.days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        }

        if (obj.months < 0) {
            obj.years -= 1;
            obj.months += 12;
        }

        return Object.keys(obj).reduce((previous, key) => {
            if (!obj[key])
                return previous;

            let unit = '';
            switch (key) {
                case 'years':
                    unit = '年';
                    break;
                case 'months':
                    unit = '個月';
                    break;
                case 'days':
                    unit = '天';
                    break;
                default:
                    break;
            }

            return `${previous}${obj[key]}${unit}`;
        }, '');
    },
};
