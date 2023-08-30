import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTodos } from './hooks/useTodos';
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 20,
  lineHeight: '64px',
  backgroundColor: '#994841',
};
const contentStyle = {
  marginTop: 20,
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const App = () => {
  const { loadTodos } = useTodos();
  useEffect(() => loadTodos, [])

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{backgroundColor: '#352E2F'}}>
        <Header style={headerStyle}><Navigation /></Header>
        <Content style={contentStyle}><Outlet /></Content>
      </Layout>    
    </Space>
  );
}

export default App;
