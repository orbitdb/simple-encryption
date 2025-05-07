import { notEqual, strictEqual, deepStrictEqual } from 'assert'
import SimpleEncryption from '../src/index.js'

describe('Simple Encryption', function () {
  describe('Interface', function () {
    it('encrypts and decrypts a string', async function () {
      const encryption = await SimpleEncryption({ password: 'hello' })
      strictEqual(encryption.encrypt != null, true)
      strictEqual(encryption.decrypt != null, true)
    })
  })

  describe('Encrypting and decrypting values', function () {
    it('encrypts and decrypts a string', async function () {
      const encoded = new TextEncoder().encode('some text')
      const encryption = await SimpleEncryption({ password: 'hello' })
      const encrypted = await encryption.encrypt(encoded)
      const decrypted = await encryption.decrypt(encrypted)
      deepStrictEqual(decrypted, encoded)
    })

    it('encrypts and decrypts an empty string', async function () {
      const encoded = new TextEncoder().encode('')
      const encryption = await SimpleEncryption({ password: 'hello' })
      const encrypted = await encryption.encrypt(encoded)
      const decrypted = await encryption.decrypt(encrypted)
      deepStrictEqual(decrypted, encoded)
    })

    it('encrypts and decrypts an Uint8Array of numbers', async function () {
      const encoded = Uint8Array.from([1, 2, 3, 4, 5])
      const encryption = await SimpleEncryption({ password: 'hello' })
      const encrypted = await encryption.encrypt(encoded)
      const decrypted = await encryption.decrypt(encrypted)
      deepStrictEqual(decrypted, encoded)
    })

    it('throws an error if data to be encrypted is not a TypedArray', async function () {
      const encoded = 123

      let err
      try {
        const encryption = await SimpleEncryption({ password: 'hello' })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'Data to encrypt must be a TypedArray')
    })

    it('throws an error if data to be decrypted is not a TypedArray', async function () {
      const encoded = 123

      let err
      try {
        const encryption = await SimpleEncryption({ password: 'hello' })
        await encryption.decrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'Data to decrypt must be a TypedArray')
    })
  })
  
  describe('Encryption password', function () {
    it('can be a string', async function () {
      const encoded = new TextEncoder().encode('some text')
      const encryption = await SimpleEncryption({ password: 'hello' })
      const encrypted = await encryption.encrypt(encoded)
      const decrypted = await encryption.decrypt(encrypted)
      deepStrictEqual(decrypted, encoded)
    })

    it('can be a TypedArray', async function () {
      const encoded = new TextEncoder().encode('some text')
      const encryption = await SimpleEncryption({ password: Uint8Array.from([1, 2, 3, 4, 5]) })
      const encrypted = await encryption.encrypt(encoded)
      const decrypted = await encryption.decrypt(encrypted)
      deepStrictEqual(decrypted, encoded)
    })

    it('can\'t be an empty string', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: '' })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be a number', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: 12345 })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be an object', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: { abc: 'hello' } })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be an array', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: ['a', 'b', 'c'] })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be a boolean', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: true })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be undefined', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: undefined })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })

    it('can\'t be is null', async function () {
      const encoded = new TextEncoder().encode('some text')
      let err
      try {
        const encryption = await SimpleEncryption({ password: null })
        await encryption.encrypt(encoded)
      } catch (e) {
        err = e
      }
      notEqual(err, undefined)
      strictEqual(err.message, 'password must be a String or a TypedArray')
    })
  })
})
