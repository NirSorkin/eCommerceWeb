import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nir Sorkin',
    email: 'Nir@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ofir Sorkin',
    email: 'Ofir@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
