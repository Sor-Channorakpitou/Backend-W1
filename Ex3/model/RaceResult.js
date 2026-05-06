import { Duration } from "./Duration.js";

export class RaceResult {
/**
 * @type {string}
 * @private
 */
_participant_id;
/**
 * @type {string}
 * @private
 */
_sport_type;
/**
 * @type {Duration}
 * @private
 */
_duration;

/**
 * @param {string} participantId
 * @param {string} sport
 * @param {Duration} duration
 */

    constructor(participantId, sport, duration) {
        this._duration = duration;
        this._participant_id = participantId;
        this._sport_type = sport;
    }

}
