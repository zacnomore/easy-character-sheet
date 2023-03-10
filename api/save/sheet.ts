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

  const flatSkills: FlatSkills = Object.fromEntries(
    Object.entries(skills).flatMap(([key, { proficient, value }]) => [
      [`${key}Proficient`, proficient],
      [`${key}Value`, value],
    ])
  ) as unknown as FlatSkills;

  prisma.sheet
    .create({
      data: {
        ...basics,
        ...abilities,
        ...flatSkills,
      },
    })
    .then((createdSheet) => {
      response.status(200).json(createdSheet);
    });
}
