export type MarkCallAsEndedResponseBody = {
  success: boolean;
  error?: string;
};

export type MarkCallAsEndedRequestBody = {
  callLogPath: string;
};
