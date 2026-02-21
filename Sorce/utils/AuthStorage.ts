// utils/AuthStorage.js
import * as Keychain from 'react-native-keychain';

/**
 * Save token to Keychain
 * @param {any} token - JWT or auth token
 */
export async function setToken(token:any) {
  try {
    await Keychain.setGenericPassword('auth', token);
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Failed to save token:', error);
  }
}

/**
 * Retrieve token from Keychain
 * @returns {Promise<string|null>} - token or null
 */
export async function getToken() {
  try {
      const credentials = await Keychain.getGenericPassword();
      console.log(credentials,'credentialscredentials')
    if (credentials) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
}

/**
 * Delete token from Keychain
 */
export async function deleteToken() {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Failed to delete token:', error);
  }
}

/**
 * Check if user is logged in
 * @returns {Promise<boolean>}
 */
export async function isLoggedIn() {
  const token = await getToken();
  return !!token;
}
