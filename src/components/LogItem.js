import React from 'react';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

// import 'moment-timezone';

const LogItem = ({
  deleteItem,
  log: { _id, priority, text, user, created },
}) => {
  const setVarriant = () => {
    if (priority === 'high') {
      return 'danger';
    } else if (priority === 'moderate') {
      return 'warning';
    } else {
      return 'success';
    }
  };
  return (
    <tr>
      <td>
        <Badge variant={setVarriant()} className="p-2">
          {priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase()}
        </Badge>
      </td>
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteItem(_id)}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
