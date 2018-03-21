# @turbo-tools/referrer-policy

Pluggable Referrer-Policy header functionality for [turbo-http](https://github.com/mafintosh/turbo-http) based servers

[![Build Status](https://travis-ci.org/turbo-tools/referrer-policy.svg?branch=master)](https://travis-ci.org/turbo-tools/referrer-policy)
[![npm (scoped)](https://img.shields.io/npm/v/@turbo-tools/referrer-policy.svg?style=flat-square)](https://www.npmjs.com/package/@turbo-tools/referrer-policy)
[![dependencies Status](https://david-dm.org/turbo-tools/referrer-policy/status.svg)](https://david-dm.org/turbo-tools/referrer-policy)
[![dependencies Status](https://david-dm.org/turbo-tools/referrer-policy/dev-status.svg)](https://david-dm.org/turbo-tools/referrer-policy#info=devDependencies)
[![Test Coverage](https://api.codeclimate.com/v1/badges/36d8486f7562b824d0a6/test_coverage)](https://codeclimate.com/github/turbo-tools/referrer-policy/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/36d8486f7562b824d0a6/maintainability)](https://codeclimate.com/github/turbo-tools/referrer-policy/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fturbo-tools%2Freferrer-policy.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fturbo-tools%2Freferrer-policy?ref=badge_shield)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/greenkeeperio/greenkeeper.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/turbo-tools/referrer-policy/badge.svg?targetFile=package.json)](https://snyk.io/test/github/turbo-tools/referrer-policy?targetFile=package.json)

## Getting Started

```js
const referrerPolicy = require('@turbo-tools/referrer-policy')
```

### referrerPolicy(response, policy='no-referrer')

Does set the `referrer-policy`and defaults to 'no-referrer' if no `policy`
argument is given.

#### Allowed policies

- no-referrer
- no-referrer-when-downgrade
- same-origin
- origin
- strict-origin
- origin-when-cross-origin
- strict-origin-when-cross-origin
- unsafe-url

For more information on what each policy means, please consult the [MDN page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

## Example

```js
const referrerPolicy = require('@turbo-tools/referrer-policy')
referrerPolicy(response)
```

### With turbo-http server

```js
const http = require('turbo-http')
const referrerPolicy = require('@turbo-tools/referrer-policy')

// Create server
const server = http.createServer(function (req, res) {
  const text = 'Same origin policy set'
  referrerPolicy(response, 'same-origin')
  res.statusCode = 200
  res.setHeader('Content-Length', text.length)
  res.write(Buffer.from(text))
})

// Listen
server.listen(3000)
```

### Installing

```bash
npm install @turbo-tools/referrer-policy --save
```

## Running the tests

All tests are contained in the [test.js](test.js) file, and written using [Jest](https://facebook.github.io/jest/docs/en/getting-started.html)

Run them:

```bash
npm test
```

If you´d like to get the coverage data in addition to runnign the tests, use:

```bash
npm run test-coverage
```

## Built With

* [NPM](https://www.npmjs.com/) - Dependency Management
* [Commitizen](https://github.com/commitizen/cz-cli) - Easy semantic commit messages
* [Jest](https://facebook.github.io/jest/) - Easy tests
* [Semantic Release](https://github.com/semantic-release/semantic-release) - Easy software releases

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests to us, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on the code of conduct.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/turbo-tools/referrer-policy/tags).

## Authors

* **Sebastian Golasch** - *Initial work* - [asciidisco](https://github.com/asciidisco)

See also the list of [contributors](https://github.com/turbo-tools/referrer-policy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to [@mafintosh](https://github.com/mafintosh) for building [turbo-net](https://github.com/mafintosh/turbo-net) and [turbo-http](https://github.com/mafintosh/turbo-http)
