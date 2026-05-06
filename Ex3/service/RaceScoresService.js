import { RaceResult } from "../model/RaceResult.js";
import { Duration } from "../model/Duration.js";
import fs from "fs";

export class RaceScoresService {
    /**
     * @type {RaceResult[]}
     * @private
     */
    _results = [];
    /**
    * Adds a new race result to the race list.
    * @param {RaceResult} result - The race result to add.
    */
    addRaceResult(result) {
    // TODO
        if ( result !== null) this._results.push(result);
    }

    /**
    * Saves the race results list to a JSON file.
    * @param {string} filePath - The path to the file data should be saved.
    */
    saveToFile(filePath) {
    // Your code
        const data = JSON.stringify(this._results, null);
        fs.writeFileSync(filePath, data, 'utf8');
        console.log(`Result saved to ${filePath}`);
    }

    /**
    * Loads the race results list from a JSON file.
    * @param {string} filePath - The path to the file to load data from.
    * @returns {boolean} True if loading was successful, false otherwise.
    */
    loadFromFile(filePath) {
    // Your code
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);

            this._results = parsed.map(
                (item) => {
                    const dur = new Duration(
                        item._duration._totalSeconds
                    )

                    return new RaceResult (
                        item._participant_id,
                        item._sport_type,
                       dur
                    );
            });

            console.log(`Loaded!`);
            return true;
        } catch (error) {
            console.error(`Error loading`, error.message);
            return false;
        }
    }

    /**
     * Retrieves the race time for a given participant and sport.
     * @param {string} participantId - Participant ID.
     * @param {string} sport - Sport name.
     * @returns {Duration|null} Duration if found, else null.
     */
    getTimeForParticipant(participantId, sport) {
    // Your code
        const result = this._results.find((rs) => 
            rs._participant_id === participantId && rs._sport_type === sport
        );
        return result ? result._duration : null;
    }

    /**
     * Computes total time for a given participant by summing their race times.
     * @param {string} participant_id - The ID of the participant.
     * @returns {Duration} The total Duration object
     */
    getTotalTimeForParticipant(participant_id) {
    // Your code
        const result = this._results.filter((rs) =>             
            rs._participant_id === participant_id
        );

        return result.reduce(
            (total, rs) => total.plus(rs._duration), new Duration(0)
        );
    }
    
}
