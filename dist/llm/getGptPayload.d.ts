import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log } from "../schemas/log";
import { SessionPhase } from "../schemas/session/phase";
interface PayloadOptions {
    forSummarization?: boolean;
    sessionPhase?: SessionPhase;
}
export declare function getGptPayload(log: Log, isFinalLogInSession: boolean, options?: PayloadOptions): ChatCompletionMessageParam[];
export {};
