import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import clientPromise from '../lib/mongodb';
import { AppLayout } from '../components/AppLayout';
import { useRouter } from 'next/router';
import { Select } from 'antd';
import Passenger from '../models/pasajero';

export default function Dashboard(props) {
  console.log('Props:', props);
  const router = useRouter();
  const numPax = 1;
  const agencia = {
    nombre: 'Molantur',
    rut: '1123123-4'
  }

  const handleAgregarPasajeros = () => {
    router.push({
      pathname: '/venta/newVenta',
      query: { numPax, agencia: JSON.stringify(agencia) }
    });

    router.push('/venta/newVenta');
  };

  return (
    <div>
      <h1>Agrega nuevos pasajeros:</h1>
      <div>
        Pessengers: 
        <Select
          onChange={value => router.push(`/venta/newVenta?pessengers=${value}`)}
          options={[...new Array(20)].map((_, index) => ({label: index + 1, value: index + 1}))}
        />
      </div>
      <button onClick={handleAgregarPasajeros}>Agregar</button>

      {/* Aquí puedes agregar la tabla o tablas de los tours del día */}
      {/* Puedes utilizar componentes de tabla o librerías como Ant Design o React-Table */}

      <div>
        <h2>TOURS DE HOY 16 DE MAYO DEL 2023</h2>
        <table>
          <thead>
            <tr>
              <th>VALLE DE LA LUNA</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes iterar sobre los datos de los pasajeros y mostrarlos en filas */}
            {/* Puedes utilizar un mapeo para generar las filas de la tabla */}
            <tr>
              <td>NOMBRE APELLIDO ETC</td>
            </tr>
          </tbody>
        </table>


      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nationality</th>
          <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {props.passengers.map(passenger => (
            <tr key={passenger.id}>
                <td>{passenger.first_name}</td>
                <td>{passenger.last_name}</td>
                <td>{passenger.nacionalidad}</td>
                <td>{new Date(passenger.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
        {/* Aquí puedes agregar más tablas o tablas adicionales para los tours del día siguiente */}
      </div>
    </div>
  );
}


Dashboard.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = await getSession(context.req, context.res);
    const client = await clientPromise;
    const db = await client.db("TraspaxMvp");
    const agencia = await db.collection("Agencia").findOne({ email: session.user.email });
    const passengers = (await Passenger.find()).map(p => {
      const {updatedAt, createdAt, ...doc} = p._doc;
      return {
        ...p._doc,
        createdAt: p.createdAt.toISOString(),
        _id: p._id.toString(),
        updatedAt: p.updatedAt.toISOString()
      }
    })
    return {
      props: {
        agencia: JSON.stringify(agencia),
        passengers
      }
    };
  }
});