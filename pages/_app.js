import '@/styles/globals.css'
import '@/styles/styles.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import { SSRProvider } from 'react-bootstrap';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout props={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
