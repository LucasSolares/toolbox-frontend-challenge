import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import uniqueId from 'lodash.uniqueid';

export default function FilesTable({ files, isLoading }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td className="text-center" colSpan="4">
              <Spinner />
            </td>
          </tr>
        )}
        {!isLoading && !files?.length && (
          <tr>
            <td className="text-center" colSpan="4">
              No files found
            </td>
          </tr>
        )}
        {files &&
          files.map(({ file, lines }) =>
            lines.map(({ text, number, hex }) => (
              <tr key={uniqueId(file)}>
                <td>{file}</td>
                <td>{text}</td>
                <td>{number}</td>
                <td>{hex}</td>
              </tr>
            ))
          )}
      </tbody>
    </Table>
  );
}

FilesTable.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          number: PropTypes.number.isRequired,
          hex: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};
