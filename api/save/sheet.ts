import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import { CreateSheetRequest } from 'models/sheet.model';
import { Skills } from 'models/stats.model';

type FlatSkills = Record<`${keyof Skills}Value`, number> &
  Record<`${keyof Skills}Proficient`, boolean>;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const prisma = new PrismaClient();
  const {
    stats: { abilities, basics, skills },
  } = request.body as CreateSheetRequest;

  prisma.sheet
    .create({
      data: {
        ...basics,
        ...abilities,
        ...skills,
      },
    })
    .then((createdSheet) => {
      response.status(200).json(createdSheet);
    });
}
