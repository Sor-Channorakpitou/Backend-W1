import { Duration } from "./model/Duration.js";
import { RaceResult } from "./model/RaceResult.js";
import { RaceScoresService } from "./service/RaceScoresService.js";
import fs from 'fs';
// Initialize RaceResults
const raceManager = new RaceScoresService();
raceManager.addRaceResult(new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30)));
raceManager.addRaceResult(new RaceResult("participant1", "run", Duration.fromMinutesAndSeconds(1, 45)));
raceManager.addRaceResult(new RaceResult("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15)));
// Save results to file
raceManager.saveToFile("./Ex3/data/raceScores.json");