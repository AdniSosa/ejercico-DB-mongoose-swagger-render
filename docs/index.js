// importaremos los diferentes archivos y los exportaremos

const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./tasks');

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};


