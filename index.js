const redirect = require('micro-redirect');

module.exports = async (req, res) => {
    return redirect(res, 302, 'https://www.twitter.com/francorreasosa');
};