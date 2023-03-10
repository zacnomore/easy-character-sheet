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

        acrobaticsValue,
        acrobaticsProficient,
        animalHandlingValue,
        animalHandlingProficient,
        arcanaValue,
        arcanaProficient,
        athleticsValue,
        athleticsProficient,
        deceptionValue,
        deceptionProficient,
        historyValue,
        historyProficient,
        insightValue,
        insightProficient,
        intimidationValue,
        intimidationProficient,
        investigationValue,
        investigationProficient,
        medicineValue,
        medicineProficient,
        natureValue,
        natureProficient,
        perceptionValue,
        perceptionProficient,
        performanceValue,
        performanceProficient,
        persuasionValue,
        persuasionProficient,
        religionValue,
        religionProficient,
        sleightOfHandValue,
        sleightOfHandProficient,
        stealthValue,
        stealthProficient,
        survivalValue,
        survivalProficient,
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
                value: acrobaticsValue,
                proficient: acrobaticsProficient,
              },
              animalHandling: {
                value: animalHandlingValue,
                proficient: animalHandlingProficient,
              },
              arcana: {
                value: arcanaValue,
                proficient: arcanaProficient,
              },
              athletics: {
                value: athleticsValue,
                proficient: athleticsProficient,
              },
              deception: {
                value: deceptionValue,
                proficient: deceptionProficient,
              },
              history: {
                value: historyValue,
                proficient: historyProficient,
              },
              insight: {
                value: insightValue,
                proficient: insightProficient,
              },
              intimidation: {
                value: intimidationValue,
                proficient: intimidationProficient,
              },
              investigation: {
                value: investigationValue,
                proficient: investigationProficient,
              },
              medicine: {
                value: medicineValue,
                proficient: medicineProficient,
              },
              nature: {
                value: natureValue,
                proficient: natureProficient,
              },
              perception: {
                value: perceptionValue,
                proficient: perceptionProficient,
              },
              performance: {
                value: performanceValue,
                proficient: performanceProficient,
              },
              persuasion: {
                value: persuasionValue,
                proficient: persuasionProficient,
              },
              religion: {
                value: religionValue,
                proficient: religionProficient,
              },
              sleightOfHand: {
                value: sleightOfHandValue,
                proficient: sleightOfHandProficient,
              },
              stealth: {
                value: stealthValue,
                proficient: stealthProficient,
              },
              survival: {
                value: survivalValue,
                proficient: survivalProficient,
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
