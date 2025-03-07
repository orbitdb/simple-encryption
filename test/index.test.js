import { deepStrictEqual } from 'assert'
import SimpleEncryption from '../src/index.js'

describe('Simple Encryption', function () {
  it('encrypts and decrypts some text', async function () {
    const encoded = new TextEncoder().encode('some text')
    const encryption = await SimpleEncryption({ password: 'hello' })
    const encrypted = await encryption.encrypt(encoded)
    const decrypted = await encryption.decrypt(encrypted)
    deepStrictEqual(decrypted, encoded)
  })
})