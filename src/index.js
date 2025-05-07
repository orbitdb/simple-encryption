/**
 * @description
 * Password encryption module encrypts data using AES-GCM PBKDF2.
 */

import { AES } from './aes-gcm-pbkdf2.js'

const SimpleEncryption = async ({ password }) => {
  if (!password || (typeof password !== 'string' && !password.subarray)) {
    throw new Error('password must be a String or a TypedArray')
  }

  const aes = AES()

  const encrypt = (value) => {
    if (!value.subarray) {
      throw new Error('Data to encrypt must be a TypedArray')
    }
    return aes.encrypt(value, password)
  }

  const decrypt = (value) => {
    if (!value.subarray) {
      throw new Error('Data to decrypt must be a TypedArray')
    }
    return aes.decrypt(value, password)
  }

  return {
    encrypt,
    decrypt
  }
}

export default SimpleEncryption
