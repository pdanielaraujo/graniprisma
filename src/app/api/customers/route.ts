import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'OK' });
}

export async function POST(request: Request) {
  const mockData = [
    {
      id: 1,
      name: 'Pedro',
      age: 23,
      address: 'Rua dos Fornos',
    },
    {
      id: 2,
      name: 'João',
      age: 21,
      address: 'Rua dos 1',
    },
    {
      id: 3,
      name: 'André',
      age: 20,
      address: 'Rua dos 2',
    },
    {
      id: 4,
      name: 'Ana',
      age: 24,
      address: 'Rua dos 3',
    },
    {
      id: 5,
      name: 'Sofia',
      age: 25,
      address: 'Rua dos 4',
    },
    {
      id: 6,
      name: 'Ricardo',
      age: 20,
      address: 'Rua dos 5',
    },
    {
      id: 7,
      name: 'António',
      age: 19,
      address: 'Rua dos 6',
    },
  ];
  return NextResponse.json(mockData);
}

export async function PUT(request: Request) {
  return NextResponse.json({ message: 'OK' });
}

export async function DELETE(request: Request) {
  return NextResponse.json({ message: 'OK' });
}

export async function PATCH(request: Request) {
  return NextResponse.json({ message: 'OK' });
}
