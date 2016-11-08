const {json, send} = require('micro');
const npmJanitor = require('npm-janitor');

module.exports = (req, res) => __async(function*(){
    let username = req.url.split('/')[1];
    if (!username) send(res, 400, 'Username missing!');
    yield npmJanitor(username, (err, data) => {
        if (err) send(res, 500, 'Something broke!');
        else send(res, 200, data);
    });
}());


function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a)}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d)}function d(e){c(e,1)}c()})}
