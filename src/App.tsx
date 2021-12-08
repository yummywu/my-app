import React, {useState} from 'react';

import './App.css';
import {
    DatePicker, message, Table,
} from 'antd';
import moment from 'moment';

const App: React.FC = (): React.ReactElement => {
    const [date, setDate] = useState<moment.Moment | null>(moment(new Date()));

    const handleChange = (value: moment.Moment | null) => {
        message.info(`The time is：${value ? value.format('YYYY-MM-DD HH:mm:ss') : 'no choose'}`).then();
        setDate(value);
    };

    interface DateType {
        key: React.Key,
        name: string,
        age: number,
        address: string
    }

    const dataSource: DateType[] = [
        {
            key: 1,
            name: 'eden',
            age: 10,
            address: 'ren heng'
        }, {
            key: 2,
            name: 'paul',
            age: 23,
            address: 'bao li'
        }, {
            key: 3,
            name: 'alex',
            age: 33,
            address: 'ge li'
        }, {
            key: 4,
            name: 'tracy',
            age: 50,
            address: 'hai yi'
        }, {
            key: 5,
            name: 'nick',
            age: 9,
            address: 'yuan da mei yu'
        }, {
            key: 6,
            name: 'alex',
            age: 33,
            address: 'ge li'
        },
    ]

    const columns = [
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address'
        }
    ]

    return (
        <div style={{textAlign: 'left'}}>
            <DatePicker onChange={handleChange}/>
            <div>
                current date is :
                {date ? date.format('YYYY-MM-DD HH:mm:ss') : 'no choose'}
            </div>
            <div>
                <Table pagination={{pageSize: 3}} columns={columns} dataSource={dataSource}
                       rowSelection={{type: 'checkbox'}}/>
            </div>
        </div>


    );
};

export default App;
