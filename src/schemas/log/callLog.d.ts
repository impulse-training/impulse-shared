import * as yup from "yup";
export declare const callLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "call";
    data: {
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        livekitSessionId: string;
        livekitRoomName: string;
    };
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    callLogDocPath: undefined;
    type: undefined;
    data: {
        agentConnectedAt: undefined;
        endedAt: undefined;
        livekitSessionId: undefined;
        livekitRoomName: undefined;
    };
}, "">;
export type CallLog = yup.InferType<typeof callLogSchema>;
