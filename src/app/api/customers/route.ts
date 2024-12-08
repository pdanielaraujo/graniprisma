import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const customers = await prisma.customer.findMany();

  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'OK' });
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
