import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log } from "../schemas/log";
import { SessionPhase } from "../schemas/session/phase";
interface PayloadOptions {
    forSummarization?: boolean;
    sessionPhase?: SessionPhase;
    sessionType?: string;
    /**
     * Tactic ids the user has completed in this session (from its tactic logs).
     * Lets the plan context mark which plan tactics are already done — the user
     * may complete steps out of order, and the plans log's own outcome field is
     * only synced by the client after the fact.
     */
    completedTacticIds?: string[];
}
export declare function getGptPayload(log: Log, isFinalLogInSession: boolean, options?: PayloadOptions): ChatCompletionMessageParam[];
export {};
