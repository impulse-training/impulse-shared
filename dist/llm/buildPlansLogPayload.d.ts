import { ChatCompletionMessageParam } from "openai/resources/chat";
import { PlansLog } from "../schemas/log";
export declare function buildPlansLogPayload(log: PlansLog, isFinalLogInSession: boolean): ChatCompletionMessageParam[];
