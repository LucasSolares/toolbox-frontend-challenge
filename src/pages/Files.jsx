import Form from 'react-bootstrap/Form';
import { FilesTable } from '../components';
import { useFilesService } from '../hooks/useFilesService';

export default function Files() {
  const {
    fetchFilesDataQuery: { data, isLoading },
    searchFilesData,
    fileName,
  } = useFilesService();

  console.log(data);

  return (
    <div className="m-4">
      <Form.Group className="mb-4 w-50">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter file name"
          value={fileName}
          onChange={(e) => searchFilesData(e.target.value)}
        />
      </Form.Group>
      <FilesTable files={data} isLoading={isLoading} />
    </div>
  );
}
