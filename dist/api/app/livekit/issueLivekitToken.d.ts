export type IssueLivekitTokenRequestBody = {
    sessionDocPath?: string;
};
export type IssueLivekitTokenResponseBody = {
    token: string;
    callLogDocPath: string;
    expiresInMs: number;
    roomName: string;
};
