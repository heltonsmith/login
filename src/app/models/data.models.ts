import { Usuario } from "./bd.models"; // Importar la interface de usuario

// bd.models.ts
export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: 'Admin User',
    usuario: 'admin',
    clave: 'admin',
    telefono: '1234567890'
  },
  {
    id: 2,
    nombreCompleto: 'Helton Bustos',
    usuario: 'helton',
    clave: 'helton',
    telefono: '0987654321'
  },
  {
    id: 3,
    nombreCompleto: 'Jane Smith',
    usuario: 'janesmith',
    clave: 'secret',
    telefono: '5555555555'
  },
  {
    id: 4,
    nombreCompleto: 'Alice Johnson',
    usuario: 'alicejohnson',
    clave: '123456',
    telefono: '9999999999'
  }
];
