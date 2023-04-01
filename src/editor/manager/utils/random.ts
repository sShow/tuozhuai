import _ from 'lodash';

export const random = () => `${_.random(0, 999999)}_${Date.now()}_${_.random(0, 999999)}`;
