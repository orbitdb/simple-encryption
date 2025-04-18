/**
 * @description
 * Password encryption module encrypts data using AES-GCM PBKDF2.
 */

import { AES } from './aes-gcm-pbkdf2.js'

const SimpleEncryption = async ({ password }) => {
  const aes = AES()

  const encrypt = (value) => {
    return aes.encrypt(value, password)
  }

  const decrypt = (value) => {
    return aes.decrypt(value, password)
  }

  return {
    encrypt,
    decrypt
  }
}

export default SimpleEncryption
