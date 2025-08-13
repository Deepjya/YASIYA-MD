const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~0JQAWLxR#WfxEOqbx2u4zCk5gpccm4z6XBYjiAhnU5-7N4q8jBdQ'
};
