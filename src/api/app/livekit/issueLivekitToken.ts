export type IssueLivekitTokenRequestBody = {
  threadDocPath?: string;
};

export type IssueLivekitTokenResponseBody = {
  token: string;
  callLogDocPath: string;
  expiresInMs: number;
};
