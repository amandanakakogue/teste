
import React, { Component, Image } from 'react';
import { Menu, Icon, Switch, Layout, Button } from 'antd';



import { Link, BrowserRouter } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


import Routes from './Router';


const { SubMenu } = Menu;

class MenuInicial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: '1',
     // links: undefined
    //}
    //this.state = {
      theme: 'dark',
      current: '2',
    } 
    this.changeTheme = this.changeTheme.bind(this)
    
  }


  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };



  render() {
    return (
      <div>
          <BrowserRouter>
            <div>

              <div>

                <br />
                <br />
              
                <Menu
                  theme={this.state.theme}
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[this.state.current]}
                  mode="inline"
                >
                  

                  <SubMenu key="sub1" icon={<MailOutlined />} title="Padrão">
                            <Menu.Item>
                              <Link key={2} to={'/cadprocesso'}>Cadastro Processo</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={1} to={'/pesprocesso'}>Pesquisa Processo</Link>
                            </Menu.Item>
                      
                            
                    </SubMenu>
            

                </Menu>
                {/*==============================================================================*/}
              </div>
              <Routes />
            </div>
          </BrowserRouter>


      </div>
    );
  }
}

export default MenuInicial;

