import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

function FormVenta({ numPasajeros }) {
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Enviar datos a la base de datos
    console.log('Valores:', values);
    // Ir a la página de listado de ventas
    router.push('/ventas/list');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // Generar el arreglo de opciones para el select de tours
  const tours = ['Tour A', 'Tour B', 'Tour C', 'Tour D', 'Tour E'];

  return (
    <div>
      <h2>Ingresa los datos de los pasajeros:</h2>
      <Form
        form={form}
        name="venta"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {[...Array(numPasajeros)].map((_, i) => (
          <div key={i}>
            <h3>Pasajero {i + 1}:</h3>
            <Form.Item
              name={['pasajeros', i, 'nombre']}
              label="Nombre"
              rules={[{ required: true, message: 'Ingresa el nombre del pasajero' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['pasajeros', i, 'pasaporte']}
              label="Pasaporte"
              rules={[{ required: true, message: 'Ingresa el número de pasaporte' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['pasajeros', i, 'tour']}
              label="Tour"
              rules={[{ required: true, message: 'Selecciona el tour' }]}
            >
              <Select>
                {tours.map((tour) => (
                  <Option key={tour} value={tour}>
                    {tour}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={['pasajeros', i, 'telefono']}
              label="Teléfono"
              rules={[{ required: true, message: 'Ingresa el número de teléfono' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['pasajeros', i, 'hotel']}
              label="Hotel"
              rules={[{ required: true, message: 'Ingresa el nombre del hotel' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['pasajeros', i, 'edad']}
              label="Edad"
              rules={[{ required: true, message: 'Ingresa la edad' }]}
            >
              <Input />
            </Form.Item>
          </div>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormVenta;
