import { Table } from 'reactstrap';
import Avatar from 'react-avatar';
import '../Styles/table.css';
import chr_img from '../assets/chr_img.svg';
import claim_token from '../assets/claim_token.svg';

const Table_Token = () => {
  return (
    <Table
      className="table_main"
      responsive
      borderless
      bgcolor="transparent"
    >
      <thead>
        <tr>
          <th>Token</th>
          <th>
            <select>
              <option>My Migrated Amount</option>
            </select>
          </th>
          <th>
            <select>
              <option>Claimable Token</option>
            </select>
          </th>
          <th>
            <select>
              <option>Action</option>
            </select>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <Avatar
              className="me-2"
              src={chr_img}
              size={30}
            />{' '}
            CHR
          </td>
          <td>
            <Avatar
              className="me-2"
              src={chr_img}
              size={20}
            />{' '}
            12.49
          </td>
          <td>
            <Avatar
              className="me-2"
              src={claim_token}
              size={20}
            />{' '}
            14.99
          </td>
          <td>
            <button className="claim_btn">Claim not started</button>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar
              className="me-2"
              src={chr_img}
              size={30}
            />{' '}
            CHR
          </td>
          <td>
            <Avatar
              className="me-2"
              src={chr_img}
              size={20}
            />{' '}
            12.49
          </td>
          <td>
            <Avatar
              className="me-2"
              src={claim_token}
              size={20}
            />{' '}
            14.99
          </td>
          <td>
            <button className="claim_btn">Claim not started</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Table_Token;
