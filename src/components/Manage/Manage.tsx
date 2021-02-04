import React, { useState, useEffect } from 'react'
import { Input, Button, Select, Table } from 'antd';
import { DepartmentItem } from '../../type/type';

export default () => {
  const [iptName, setIptName] = useState('');
  const [depart, setDepart] = useState(0);
  const [defaultSelectValue, setDefaultSelectValue] = useState(
    (DEPARTMENT.length !== 0 && DEPARTMENT[0].id) || 0);
  const [data, setData] = useState([]);

  const onSearch = () => {
    const params = { iptName, depart };
    console.log('params', params)
  };

  return (
    <div>
      <div style={{ paddingBottom: 20 }}>
        <Input.Search placeholder="请输入姓名"
          value={iptName}
          style={{ width: 200 }}
          onChange={e => setIptName(e.target.value)} />
        <Select defaultValue={defaultSelectValue}
          style={{ width: 200, margin: '0 20px' }}
          allowClear
          onChange={(val: number) => setDepart(val)}>
          {
            DEPARTMENT.map((item: DepartmentItem) => <Select.Option
              value={item.id}
              key={item.id}>{item.label}</Select.Option>)
          }
        </Select>
        <Button type="primary" onClick={onSearch}>搜索</Button>
      </div>
      <Table dataSource={data}
        columns={[
          { title: '姓名', dataIndex: 'name' },
          { title: '部门', dataIndex: 'depart' },
          { title: '职级', dataIndex: 'rank' },
          { title: '入职时间', dataIndex: 'startTime' },
        ]}
      />
    </div >
  )
}
