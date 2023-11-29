import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

import { fetchFilesData } from '../services/files.service';

export const FETCH_FILES_DATA_QUERY_KEY = 'fetchFilesData';

export const useFilesService = () => {
  const [fileName, setFileName] = useState('');
  const [debouncedFileName] = useDebounce(fileName, 800);

  const searchFilesData = (value) => {
    setFileName(value);
  };

  const fetchFilesDataQuery = useQuery({
    queryKey: [FETCH_FILES_DATA_QUERY_KEY, debouncedFileName],
    queryFn: () => fetchFilesData(debouncedFileName),
  });

  return {
    searchFilesData,
    fileName,
    fetchFilesDataQuery,
  };
};
