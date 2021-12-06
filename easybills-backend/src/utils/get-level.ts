import { levelDatabase } from 'src/main';

export const getLevel = async (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    levelDatabase.get(key, (error: Error, value: any) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
};
