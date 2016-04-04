# Express Starter

[Express.js](http://expressjs.com/) starter project with debugging enable.

[![wercker status](https://app.wercker.com/status/e19712109472ff03b1d2da2b6409c2af/s "wercker status")](https://app.wercker.com/project/bykey/e19712109472ff03b1d2da2b6409c2af)

## Result

Using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop):

![result](media/postman.png)

## Development

Clone this repository:

```sh
git clone https://github.com/mrpatiwi/express-starter.git
```

### Setup

Make sure you have installed [Node 5.x](https://nodejs.org/en/).

Install global dependencies:

```sh
npm install -g node-inspector nodemon opn-cli
```

Install project dependencies:

```sh
npm install
```

### Running

Start the development server on [`http://localhost:3000`](http://localhost:3000/) with:

```sh
npm run debug
```

Running without debugging enabled:

```sh
npm start
```

### Testing

Run all test located in `test/` with:

```sh
npm test
```
