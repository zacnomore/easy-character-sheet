import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import { CreateSheetRequest } from 'models/sheet.model';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const prisma = new PrismaClient();
  const { id: idStr } = request.query;
  const id =
    typeof idStr === 'string' ? parseInt(idStr, 10) : parseInt(idStr[0], 10);

  prisma.sheet
    .findFirstOrThrow({ where: { id } })
    .then((createdSheet) => {
      response.status(200).json(createdSheet);
    })
    .catch(() => {
      response.status(404).json({
        error: 'Sheet not found',
      });
    });
}
