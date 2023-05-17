import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';
import { useState } from 'react';
import FormVenta from '../../components/FormVenta';
import { useRouter } from 'next/router';
import { Input, Form } from 'antd';
import { Col, Row, Button } from 'antd';

const passenger = [
  { name: 'first_name', label: 'First Name' },
  { name: 'last_name', label: 'Last Name' },
  { name: 'nacionalidad', label: 'Nationality' }, 
  // 'rut_pasaporte', 'hotel', 'contacto', 'edad', 'observaciones', 'vendedor', 'traspaso'
]

export default function NewVenta(props) {
  // console.log('Props:', props);
  const { numPax, agencia } = props;
  const router = useRouter();
  const onFinish = values => {
    const length = Object.keys(values).length / passenger.length;
    const passengers = [];
    for (let i = 0; i < length; i++) {
      const p = {}
      passenger.forEach(item => {
        p[item.name] = values[`${item.name}_${i}`]
      })
      passengers.push(p)
    }
    fetch('/api/passenger/post', {
      method: 'POST',
      body: JSON.stringify(passengers),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => router.back())
    .catch(err => console.log(err))
  }
  const onFinishFailed = err => {
    console.log(err)
  }

  return (
    <div>
      <h1>Agrega nuevos pasajeros:</h1>
      <Form className='p-4' name='basic' autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {[...new Array(+router.query.pessengers || 1)].map((_, index) => (
          <div key={index} className='grid grid-cols-2 gap-4 my-4'>
            {passenger.map((passenger, i) => (
              <Form.Item key={i} name={`${passenger.name}_${index}`} label={passenger.label} rules={[{ required: true, message: `${passenger.label} is required!` }]}>
                <Input />
              </Form.Item>
            ))}
          </div>
        ))}
        <Button htmlType="submit">Ok</Button>
      </Form>
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
    // console.log('Context:', context.query);
    // const { numPax, agencia } = context.req.query;
    return {
      // props: {
      //     numPax: parseInt(numPax), // Convertir a número entero
      //     agencia: JSON.parse(agencia) // Parsear el objeto JSON
      //   }
    };
  }
});

