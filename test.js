/* eslint-env jest */
const referrerPolicy = require('./index')

// response mock
const response = {
  headers: {},
  setHeader: function (a, b) {
    this.headers[a] = b
  }
}

afterEach(() => {
  response.headers = {}
})

test('does set default header if no option is given value', () => {
  referrerPolicy(response)
  expect(response.headers).toEqual({'Referrer-Policy': 'no-referrer'})
})

test('does set no-referrer header value', () => {
  referrerPolicy(response, 'no-referrer')
  expect(response.headers).toEqual({'Referrer-Policy': 'no-referrer'})
})

test('does set no-referrer-when-downgrade header value', () => {
  referrerPolicy(response, 'no-referrer-when-downgrade')
  expect(response.headers).toEqual({'Referrer-Policy': 'no-referrer-when-downgrade'})
})

test('does set same-origin header value', () => {
  referrerPolicy(response, 'same-origin')
  expect(response.headers).toEqual({'Referrer-Policy': 'same-origin'})
})

test('does set origin header value', () => {
  referrerPolicy(response, 'origin')
  expect(response.headers).toEqual({'Referrer-Policy': 'origin'})
})

test('does set strict-origin header value', () => {
  referrerPolicy(response, 'strict-origin')
  expect(response.headers).toEqual({'Referrer-Policy': 'strict-origin'})
})

test('does set origin-when-cross-origin header value', () => {
  referrerPolicy(response, 'origin-when-cross-origin')
  expect(response.headers).toEqual({'Referrer-Policy': 'origin-when-cross-origin'})
})

test('does set strict-origin-when-cross-origin header value', () => {
  referrerPolicy(response, 'strict-origin-when-cross-origin')
  expect(response.headers).toEqual({'Referrer-Policy': 'strict-origin-when-cross-origin'})
})

test('does set unsafe-url header value', () => {
  referrerPolicy(response, 'unsafe-url')
  expect(response.headers).toEqual({'Referrer-Policy': 'unsafe-url'})
})

test('does set empty header value', () => {
  referrerPolicy(response, '')
  expect(response.headers).toEqual({'Referrer-Policy': ''})
})

test('does throw if invalid policy is set', () => {
  expect(() => {
    referrerPolicy(response, 'invalid-policy')
  }).toThrow()
})
