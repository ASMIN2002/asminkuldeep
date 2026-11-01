import { developerSkills } from "./skillQuiz";
import { viewerSkills } from "./viewersSkill";
export const quizData = { ...developerSkills, ...viewerSkills };
export const skillSlugs = Object.keys(quizData);