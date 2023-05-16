import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';
import { useState } from 'react';
import FormVenta from '../../components/FormVenta';


export default function NewVenta(props) {
  console.log('Props:', props);


  return (
    // form con el numero de pasajeros y un title con el nombre de la agencia
    <div>
        <h1>Agrega nuevos pasajeros:</h1>
        <FormVenta />
    </div>
    
  );
}

NewVenta.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired( () => {
    return {
      props: {
      },
    };
  });
