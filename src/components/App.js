import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';

const App = () => {
  const [logs, setLogs] = useState([
    {
      _id: 1,
      priority: 'low',
      text: 'This is log one',
      user: 'Brad',
      created: new Date().toString(),
    },
    {
      _id: 2,
      priority: 'high',
      text: 'This is log two',
      user: 'Kate',
      created: new Date().toString(),
    },
    {
      _id: 3,
      priority: 'moderate',
      text: 'This is log three',
      user: 'Zeus',
      created: new Date().toString(),
    },
  ]);

  function addItem(item) {
    item._id = Math.floor(Math.random() * 90000) + 10000;
    item.created = new Date().toString();
    setLogs([...logs, item]);
  }
  return (
    <Container>
      <AddLogItem addItem={addItem} />
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {logs.map(log => {
            return <LogItem key={log._id} log={log} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
