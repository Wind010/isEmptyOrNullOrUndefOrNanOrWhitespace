# isEmptyOrNullOrUndefOrNanOrWhitespace
Utilities to determine if string is any of the following null, empty, undefined, NaN, or whitespace.


## Installation

[npm][]:

```sh
TBD
```

## Usage

```js
const StringUtils = require('StringUtils');
const isEmptyOrNullOrUndefOrNanOrWhitespace = StringUtils.isEmptyOrNullOrUndefOrNanOrWhitespace;

isEmptyOrNullOrUndefOrNanOrWhitespace('x') // => false
isEmptyOrNullOrUndefOrNanOrWhitespace('_') // => false
isEmptyOrNullOrUndefOrNanOrWhitespace('😊') // => false
isEmptyOrNullOrUndefOrNanOrWhitespace('') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace("") // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(null) // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(undefined) // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(NaN) // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(' ') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(" ") // => true
isEmptyOrNullOrUndefOrNanOrWhitespace('\n') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace('\r') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace('\t') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace('\u00a0') // => true
isEmptyOrNullOrUndefOrNanOrWhitespace(32) // Chacter code checks => true  


## License

[MIT][license] © [Jeff Tong][author]


<!-- Links -->

[author]: https://www.linkedin.com/in/jeff-jin-hung-tong/
[license]: license
[npm]: https://docs.npmjs.com/cli/install