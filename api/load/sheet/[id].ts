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

        alignment,
        background,
        characterName,
        classAndLevel,
        experiencePoints,
        playerName,
        race,

        proficiencyBonus,

        acrobatics,
        animalHandling,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        investigation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        religion,
        sleightOfHand,
        stealth,
        survival,

        // savingThrowStrProficient,
        // savingThrowDexProficient,
        // savingThrowConProficient,
        // savingThrowIntProficient,
        // savingThrowWisProficient,
        // savingThrowChaProficient,
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
            proficiencyBonus,
            basics: {
              alignment,
              background,
              characterName,
              classAndLevel,
              experiencePoints,
              playerName,
              race,
            },
            skills: {
              acrobatics,
              animalHandling,
              arcana,
              athletics,
              deception,
              history,
              insight,
              intimidation,
              investigation,
              medicine,
              nature,
              perception,
              performance,
              persuasion,
              religion,
              sleightOfHand,
              stealth,
              survival,
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
