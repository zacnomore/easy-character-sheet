import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import { SheetResponse } from 'models/sheet.model';

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
    .then(
      ({
        charisma,
        constitution,
        dexterity,
        intelligence,
        strength,
        wisdom,

        // alignment,
        // background,
        characterName,
        // classAndLevel,
        // experiencePoints,
        // playerName,
        // race,

        // acrobatics,
        // animalHandling,
        // arcana,
        // athletics,
        // deception,
        // history,
        // insight,
        // intimidation,
        // investigation,
        // medicine,
        // nature,
        // perception,
        // performance,
        // persuasion,
        // religion,
        // sleightOfHand,
        // stealth,
        // survival,
      }) => {
        response.status(200).json({
          stats: {
            abilities: {
              charisma,
              constitution,
              dexterity,
              intelligence,
              strength,
              wisdom,
            },
            basics: {
              alignment: '',
              background: '',
              characterName,
              classAndLevel: '',
              experiencePoints: 0,
              playerName: '',
              race: '',
            },
            skills: {
              acrobatics: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              animalHandling: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              arcana: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              athletics: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              deception: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              history: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              insight: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              intimidation: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              investigation: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              medicine: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              nature: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              perception: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              performance: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              persuasion: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              religion: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              sleightOfHand: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              stealth: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
              survival: {
                proficient: false,
                value: 10 + Math.floor((Math.random() - 0.5) * 10),
              },
            },
          },
        } satisfies SheetResponse);
      }
    )
    .catch(() => {
      response.status(404).json({
        error: 'Sheet not found',
      });
    });
}
