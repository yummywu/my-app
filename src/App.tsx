import React, { useState } from 'react';

import './App.css';
import {
  DatePicker, message,
} from 'antd';
import moment from 'moment';

const App: React.FC = ():React.ReactElement => {
  const [date, setDate] = useState<moment.Moment | null>(moment(new Date()));

  const handleChange = (value: moment.Moment | null) => {
    message.info(`The time is：${value ? value.format('YYYY-MM-DD HH:mm:ss') : 'no choose'}`).then();
    setDate(value);
  };

  return (
      <div style={{ textAlign: 'left' }}>
        <DatePicker onChange={handleChange} />
        <div>
          current date is :
          {date ? date.format('YYYY-MM-DD HH:mm:ss') : 'no choose'}
        </div>
      </div>

  );
};

export default App;
