/* eslint-disable func-names */
/* eslint-disable no-extend-native */

import dateHelper from '@/utils/date';

function initDate() {
    Date.prototype.format = function (fmt = 'yyyy/MM/dd HH:mm:ss') {
        return dateHelper.formatDate(this, fmt);
    };

    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + days);
        return this;
    };

    Date.prototype.addHours = function (hours) {
        this.setHours(this.getHours() + hours);
        return this;
    };

    Date.prototype.addMinutes = function (minutes) {
        this.setMinutes(this.getMinutes() + minutes);
        return this;
    };
}

export default {
    install() {
        initDate();
    },
};
