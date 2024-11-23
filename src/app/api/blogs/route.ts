import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dbPath = process.env.BASE_URL;


  if (!dbPath) {
    return NextResponse.json({ error: "آدرس دیتابیس مشخص نیست." }, { status: 500 });
  }

  const filePath = path.resolve(dbPath);
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData);
  } catch {
    return NextResponse.json({ error:  'خطا در خواندن فایل پایگاه داده.' }, { status: 500 });
  }
}
