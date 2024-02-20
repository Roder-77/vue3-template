export default {
    /**
     * 取得隨機整數
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns 範圍內隨機整數
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    /**
     * convert hex to byte array
     * @param {*} hex 12 進位數值
     * @returns byte array
     */
    hexToByteArray(hex) {
        const bytes = [];

        for (let c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substr(c, 2), 16));
        }

        return bytes;
    },
    /**
     * convert hex to unit8 array
     * @param {*} hex 12 進位數值
     * @returns unit8 array
     */
    hexToUint8Array(hex) {
        return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(h => (parseInt(h, 16))));
    },
    /**
     * 向左補零
     * @param {*} value 原值
     * @param {*} length 補零的長度
     * @returns 補零後的結果
     */
    padZero(value, length) {
        return value.toString().padStart(length, 0);
    },
    /**
     * 計算日期期間
     * @param {Date} start 起始時間
     * @param {Date} end 結束時間
     * @param {string} calculatedTo years or months
     * @returns {string} 日期期間 ex 3年5個月10天
     */
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
    /**
     * 設定 Form data
     * @param {Object} object 物件
     */
    setFormData(object) {
        const formData = new FormData();
        const appendArray = (formData, array, prefix) => {
            array.forEach((v, i) => {
                if (v === null || v === undefined)
                    return;

                const key = `${prefix}[${i}]`;

                if (Array.isArray(v))
                    appendArray(formData, v, key)
                else if (typeof v === 'object')
                    appendObject(formData, v, key);
                else
                    formData.append(key, v);
            });
        };
        const appendObject = (formData, object, prefix) => {
            Object.keys(object).forEach(k => {
                var v = object[k];
                if (v === null || v === undefined)
                    return;

                const key = prefix ? `${prefix}.${k}` : k;

                if (Array.isArray(v))
                    appendArray(formData, v, key);
                else if (typeof v === 'object')
                    appendObject(formData, v, key);
                else
                    formData.append(key, v);
            });
        };

        appendObject(formData, object);

        return formData;
    }
};
