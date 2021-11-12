import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Checkbox, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Divider } from 'antd';


const dataSource = [
  {
    key: '1',
    checkbox: <Checkbox onChange={onChange2}></Checkbox>,
    nome_instituidor: 'Ricardo dos Santos',
    nome_requerente: 'Joana dos Santos',
    numero_matricula: '195-8',
    numero_processo: 'Iprev-564/2021',
    dt_chegada_iprev: '10/09/2021',
  },
  {
    key: '2',
    checkbox: <Checkbox onChange={onChange2}></Checkbox>,
    nome_instituidor: 'Carolina Vieira Rodrigues',
    nome_requerente: 'Sérgio Rodrigues',
    numero_matricula: '965-1',
    numero_processo: 'Detran-230/2021',
    dt_chegada_iprev: '05/10/2021',
  },
];

const columns = [
  
  {
    title: <Checkbox onChange={onChange2} disabled></Checkbox>,
    dataIndex: 'checkbox',
    key: 'checkbox',
  },
  {
    title: 'Instituidor',
    dataIndex: 'nome_instituidor',
    key: 'nome_instituidor',
  },
  {
    title: 'Requerente',
    dataIndex: 'nome_requerente',
    key: 'nome_requerente',
  },
  {
    title: 'Matrícula',
    dataIndex: 'numero_matricula',
    key: 'numero_matricula',
  },
  {
    title: 'Processo',
    dataIndex: 'numero_processo',
    key: 'numero_processo',
  },
  {
    title: 'Data Chegada',
    dataIndex: 'dt_chegada_iprev',
    key: 'dt_chegada_iprev',
  },
];

const { Option } = Select;

function onChange2(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class PesquisaProcesso extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      nome_pessoa : '',
      cd_origem :  ' ',
      
          
    }
  }

  render() {
    return (
      <div>
        <Modal
        width={900}
        heigth={500}
        title="Pesquisa de Processos"
        visible={this.state.visible}
        footer={[]}>  
        <table width="100%">
          <tr align="left">
            <th><Input style={{ width: 350}} placeholder="Instituidor, requerente" type="text" value={this.state.nome_pessoa}/></th>
            <th><Select
                  showSearch
                  style={{ width: 350 }}
                  placeholder="Órgão de Origem"
                  labelInValue
                  defaultValue={{ value: this.state.cd_origem }}
                  optionFilterProp="children"
                  onChange={(e) => { this.setState({ 'cd_origem': e.value }) }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  value={this.state.cd_origem}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="1">Iprev</Option>
                  <Option value="2">PMSC</Option>
                  <Option value="3">Detran</Option>
                </Select>
              </th>
            <th><Button type="primary">Pesquisar</Button></th>
          </tr> 
          <tr heigth="10" ><th colspan="3"><Divider /></th></tr>
          <tr><th colspan="3">
          <table width="100%">
              <tr>
                <th align="left">Processos - 15 encontrados</th>
                <th align="right"><Button type="primary">Novo Processo</Button></th>
              </tr>
              <tr heigth="10" ><th colspan="3"><Divider /></th></tr>
              <tr>
                <th colspan="2"><Table  dataSource={dataSource} columns={columns} /></th>
              </tr>
          </table></th>
          </tr>
        </table>  
        </Modal>
      </div>
    );
  }

}  


export default PesquisaProcesso;

