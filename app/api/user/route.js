import { Connection } from '../../utils/mongodb';
import Credentials from '@/app/schemas/user';

import { NextResponse } from 'next/server';

export async function POST(request) {

    const { name, email } = await request.json();

    await Connection();
    await Credentials.create({ name, email, username: "na", badges: "na" });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
}