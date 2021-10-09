import * as bcrypt from 'bcrypt';
export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err: Error, result: boolean) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
