import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';
import { useState } from 'react';

// Función para obtener la información de la agencia desde la base de datos
async function fetchAgencia() {
  // Reemplazar con la lógica para obtener la agencia desde la base de datos
  const agencia = {
    nombre: 'Molantur',
    rut: '1123123-4',
    direccion: 'Caracoles 219',
    telefono: '56926060824',
    email: 'molantur@gmail.com',
  };
  console.log('Agencia:', agencia);
  return agencia;
}

export default function NewVenta(props) {
  const [numPasajeros, setNumPasajeros] = useState(1); // valor predeterminado de 1
  const { agencia } = props;

  if (!agencia) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Hola {agencia.nombre}, cuántos pasajeros deseas registrar:</h1>
      <select
        value={numPasajeros}
        onChange={(e) => setNumPasajeros(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button onClick={() => console.log(numPasajeros)}>¡Vamos!</button>
    </div>
  );
}

NewVenta.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(async ({ req }) => {
    const agencia = await fetchAgencia(); // replace this with code to fetch the agency from the database
    return {
        props: { agencia },
    };
});
