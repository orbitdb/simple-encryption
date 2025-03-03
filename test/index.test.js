import SimpleEncryption from '../src/index.js'

describe('Simple Encryption', function () {
  it('encrypts a record', async function () {
    const encryption = await SimpleEncryption({ password: 'hello' })
  })
})