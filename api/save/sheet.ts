import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import { CreateSheetRequest } from 'models/sheet.model';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const prisma = new PrismaClient();
  const { characterName } = request.body as CreateSheetRequest;

  prisma.sheet
    .create({
      data: {
        characterName,
      },
    })
    .then((createdSheet) => {
      response.status(200).json(createdSheet);
    });
}
