import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log } from "../schemas/log";
interface PayloadOptions {
    forSummarization?: boolean;
}
export declare function getGptPayload(log: Log, isFinalLogInSession: boolean, options?: PayloadOptions): ChatCompletionMessageParam[];
export {};
