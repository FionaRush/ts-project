import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { DEPARTMENT } from '../../constants/constants';
import { QueryForm, DepartmentItem, EmployeeTable } from '../../type/type';
import axios from 'axios';

interface Props {
  onDataChange(params: EmployeeTable): void
}

export default (props: Props) => {
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState<number | undefined>();

  const onSearch = (param: QueryForm) => {
    axios.get('/ajax', param).then(res => {
      props.onDataChange(res.data);
    });
  };

  useState(() => {
    onClick()
  }, []);

  const onClick = () => {
    onSearch({ name, departmentId })
  };

  return <>
    <Form layout="inline">
      <Form.Item>
        <Input.Search placeholder="请输入姓名"
          value={name}
          style={{ width: 200 }}
          onChange={e => setName(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Select placeholder="请选择部门"
          style={{ width: 200, margin: '0 20px' }}
          allowClear
          value={departmentId}
          onChange={(val: number) => setDepartmentId(val)}>
          {DEPARTMENT.map((item: DepartmentItem) => <Select.Option
            value={item.id}
            key={item.id}>{item.label}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onClick}>查询</Button>
      </Form.Item>
    </Form>
  </>
}
