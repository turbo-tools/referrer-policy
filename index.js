/**
 * List of allowed policies
 *
 * @private
 */

const ALLOWED_POLICIES = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'same-origin',
  'origin',
  'strict-origin',
  'origin-when-cross-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
  ''
]

/**
 * Checks the validity of the policy & sets the header accordingly
 *
 * @param {object} response Turbo HTTP response object
 * @param {string} policy Policy to use, defaults to `no-referrer` [optional]
 * @throws {Error} If policy is not in the allowed policies list
 * @public
 */

module.exports = function referrerPolicy (response, policy = 'no-referrer') {
  const invalid = ALLOWED_POLICIES.indexOf(policy) === -1
  if (invalid) throw new Error(`"${policy}" is not a valid policy. Allowed policies: ${ALLOWED_POLICIES.join(',')}.`)
  response.setHeader('Referrer-Policy', policy)
}
