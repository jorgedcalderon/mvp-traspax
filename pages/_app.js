import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import 'antd/dist/reset.css'; // importar los estilos de Ant Design
import { Layout } from 'antd'; // importar los componentes de Ant Design que se van a utilizar

const { Header, Footer, Content } = Layout; // extraer los componentes que se van a utilizar

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <Layout>
        <Header>Header de la aplicación</Header>
        <Content>{getLayout(<Component {...pageProps} />, pageProps)}</Content>
        <Footer>Footer de la aplicación</Footer>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;

