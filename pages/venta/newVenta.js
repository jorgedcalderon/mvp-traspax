import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';
import { useState } from 'react';
import FormVenta from '../../components/FormVenta';

export default function NewVenta(props) {
  console.log('Props:', props);
  const { numPax, agencia } = props;

  return (
    <div>
      <h1>Agrega nuevos pasajeros:</h1>
      {/* <h2>{agencia.nombre}</h2> 
      <FormVenta numPasajeros={numPax} />  */}
    </div>
  );
}

NewVenta.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};


export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context) {
        // const { numPax, agencia } = context.req.query;
        console.log('Context:', context);
        return {
            // props: {
            //     numPax: parseInt(numPax), // Convertir a número entero
            //     agencia: JSON.parse(agencia) // Parsear el objeto JSON
            //   }
        };
    }
  });

