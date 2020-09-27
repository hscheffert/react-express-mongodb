const chalk = require('chalk');

class HttpUtils {
  handleError = (res, error) => {
    console.error(error);
    console.log(chalk.red(error));
    return res.status(500).send({
      message: error.message || 'An unexpected error has occurred',
    });
  };

  validatePostRequest = (req) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Content cannot be empty'
      });
    }
  };


}

module.exports = new HttpUtils();