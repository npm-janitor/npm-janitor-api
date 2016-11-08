const {json, send} = require('micro');
const npmJanitor = require('npm-janitor');

module.exports = async (req, res) => {
    let username = req.url.split('/')[1];
    if (!username) send(res, 400, 'Username missing!');
    await npmJanitor(username, (err, data) => {
        if (err) send(res, 500, 'Something broke!');
        else send(res, 200, data);
    });
};

