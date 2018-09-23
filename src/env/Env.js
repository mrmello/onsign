/**
 * Environment variables file.
 * For security reasons, this file should not be commited, however
 * as for this test was decided to keep the keys in here to avoid extra
 * configuration when runnig this application
 */
const env = {
  GOOGLE_API_KEY:         process.env.GOOGLE_API_KEY          || 'AIzaSyAg6rz9WIBVRKGEo-Zqx9tjDxSTF4Yk6rs',
  OPEN_WHATHER_API_KEY:   process.env.OPEN_WHATHER_API_KEY    || 'b78eb13035123aa706e7715ef9d79f6c'
}

export default env