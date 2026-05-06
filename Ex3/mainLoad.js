import { Duration } from './model/Duration.js';
import { RaceResult } from './model/RaceResult.js';
import { RaceScoresService } from './service/RaceScoresService.js';

const raceManager = new RaceScoresService();
// Load results from file
raceManager.loadFromFile('./Ex3/data/raceScores.json');
// Retrieve time for a participant and sport
const time1 = raceManager.getTimeForParticipant('participant1', 'swim');
console.log(time1.toString()); // "2m 30s"
// Compute total time for a participant
const totalTime1 = raceManager.getTotalTimeForParticipant('participant1');
console.log(totalTime1.toString()); // "4m 15s"