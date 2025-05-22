import { strictEqual, notDeepStrictEqual } from 'assert'
import SimpleEncryption from '../src/index.js'

describe('Initialization Vector', function () {
  this.timeout(30000)
  it('generates new salt and nonce at specified intervals', async function () {
    const encryption = await SimpleEncryption({ password: 'hello' })

    let encrypted = await encryption.encrypt(new TextEncoder().encode('world' + 0))

    let currentSalt = encrypted.subarray(0, 16)
    let currentNonce = encrypted.subarray(16, 28)

    for (let i = 1; i < encryption.ivInterval * 10; i++) {
      encrypted = await encryption.encrypt(new TextEncoder().encode('world' + i))
      if (i % encryption.ivInterval === 0) {
        notDeepStrictEqual(encrypted.subarray(0, 16), currentSalt)
        notDeepStrictEqual(encrypted.subarray(16, 28), currentNonce)
      }
      currentSalt = encrypted.subarray(0, 16)
      currentNonce = encrypted.subarray(16, 28)

      const decrypted = await encryption.decrypt(encrypted)
      strictEqual(new TextDecoder().decode(decrypted), 'world' + i)
    }
  })
})
