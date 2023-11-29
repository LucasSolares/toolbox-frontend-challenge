import { api } from '../config/api.config';

export const fetchFilesData = async (fileName) => {
  const params = {};

  if (fileName) {
    params.fileName = fileName;
  }

  const { data } = await api.get('/files/data', {
    params,
  });

  return data;
};
