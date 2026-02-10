/**
 * @fileoverview Fork of eslint rule that sorts keys in objects (https://eslint.org/docs/rules/sort-keys) with autofix enabled
 * @author Leonid Buneev
 */
'use strict'

const { name, version } = require('../package.json')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
  meta: {
    name,
    namespace: 'sort-keys-fix',
    version
  },
  rules: {
    'sort-keys-fix': require('./rules/sort-keys-fix'),
  }
}
