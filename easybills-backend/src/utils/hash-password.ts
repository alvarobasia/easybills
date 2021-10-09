import * as bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_ROUNDS, (errorInSalt: Error, salt: string) => {
      if (errorInSalt) {
        reject(errorInSalt);
      }
      bcrypt.hash(password, salt, (errorInHash: Error, hash: string) => {
        if (errorInHash) {
          reject(errorInHash);
        }
        resolve(hash);
      });
    });
  });
};
