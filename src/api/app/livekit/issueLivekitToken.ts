export type IssueLivekitTokenRequestBody = {
  // In-app calls with Zara
  threadDocPath?: string;

  // Sessions app calls with humans
  sessionDocPath?: string;
};

export type IssueLivekitTokenResponseBody = {
  token: string;
  callLogDocPath: string;
  expiresInMs: number;
  roomName: string;
};
