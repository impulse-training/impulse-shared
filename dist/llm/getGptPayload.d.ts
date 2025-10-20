import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log } from "../schemas/log";
export declare function getGptPayload(log: Log): ChatCompletionMessageParam[];
