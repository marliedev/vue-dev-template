'use strict';

module.exports.MainConfig = {
    // url zur API (db.json)
    apiURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://url-zur-api',
    // url zu den files, die je nach Einstellung geladen werden
    dataURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/data/' : 'https://url-zur-api/data'
};
