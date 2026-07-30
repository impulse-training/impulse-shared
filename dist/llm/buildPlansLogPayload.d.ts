import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log, PlansLog } from "../schemas/log";
/**
 * Tactic ids the user has completed in this session, read from its tactic
 * logs. Feed this to getGptPayload's `completedTacticIds` option so the plan
 * context reflects out-of-order completions the moment the tactic log exists,
 * instead of waiting on the client to sync the plans log's outcome field.
 */
export declare function getCompletedTacticIds(logs: Log[]): string[];
export declare function buildPlansLogPayload(log: PlansLog, isFinalLogInSession: boolean, completedTacticIds?: string[]): ChatCompletionMessageParam[];
