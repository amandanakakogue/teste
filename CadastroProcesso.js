import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { Space } from 'antd';
import { Steps, Divider } from 'antd';


const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function onChange2(value) {
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

class CadastroProcesso extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      desc_obs : '',
      dt_mov : '',
      cod_analista : '',
      cod_mov : '',  
    }

  
  }



  render() {
    return (
      <div>
        <Modal
          width={750}
          heigth={500}
          title="Cadastro de Processos"
          visible={this.state.visible}
          footer={[  ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Cadastro de Processos" key="1">
            <p>TESTE</p>
            </TabPane>
            <TabPane tab="Movimentação do Processo" key="3">
            <Divider />
            <table width="100%">
              <tr>  
                  <th align="left">
                    Analista do Processo:<br />
                    <Select
                      showSearch
                      placeholder="Analista"
                      labelInValue
                      defaultValue={{ value: this.state.cod_analista }}
                      style={{ width: 700 }}
                      onChange={(e) => { this.setState({ 'cod_analista': e.value }) }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Regiane da Rosa</Option>
                      <Option value="2">Bruno Silva</Option>
                      <Option value="3">Cristine Fernandes</Option>
                      <Option value="1">Reginaldo Ferreira</Option>
                    </Select>
                  </th>
              </tr>
              <tr>  
                  <th align="left">
                    Movimentação do Processo:<br />
                    <Select
                      showSearch
                      placeholder="Movimentação"
                      labelInValue
                      defaultValue={{ value: this.state.cod_mov }}
                      style={{ width: 700 }}
                      onChange={(e) => { this.setState({ 'cod_mov': e.value }) }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">Regularidade</Option>
                      <Option value="2">Encaminhamento para perícia</Option>
                      <Option value="3">Encaminhamento para GECAD</Option>
                      <Option value="4">Deferido</Option>
                    </Select>
                  </th>
              </tr>
              <tr>  
                  <th align="left">
                    Data da Movimentação:<br />
                    <Space direction="vertical">
                      <DatePicker onChange={onChange} 
                      format="DD-MM-YYYY" value={this.state.dt_mov}/>
                    </Space>
                  </th>
              </tr>
              <tr>  
                  <th align="left">
                    Observação:<br />
                    <TextArea rows={4} 
                    style={{ width: 700 }} value={this.state.desc_obs}/>
                  </th>
              </tr>
              <tr heigth="10" ><th><Divider /></th></tr>
              <tr>  
                  <th align="right">
                  <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>&nbsp;&nbsp;&nbsp;    
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              Cadastrar
            </Button>
                  </th>
              </tr>
            </table>  
            </TabPane>

            <TabPane tab="Histórico da Movimentação" Key='4'>
              <Divider />
                      <Steps align="center" progressDot current={2} direction="vertical">
                        <Step title="10/09/2021" description="Em análise" />
                        <Step title="15/09/2021" description="Encaminhamento para perícia" />
                        <Step title="20/09/2021" description="Deferido" />
                      </Steps>
            </TabPane>
            
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default CadastroProcesso;