import * as yup from "yup";
import {
  WhatsappExternalSender,
  whatsappExternalSender,
} from "./whatsappExternalSender";

export * from "./whatsappExternalSender";

export const externalSenderSchemas: Record<
  ExternalSenderValue["type"],
  yup.ObjectSchema<ExternalSenderValue>
> = {
  whatsapp: whatsappExternalSender,
} as any;

export const externalSenderSchema = yup.lazy((value: any) => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === "string" && value.type in externalSenderSchemas) {
    return externalSenderSchemas[value.type as ExternalSenderValue["type"]];
  }

  return yup.object({
    type: yup
      .mixed<ExternalSenderValue["type"]>()
      .oneOf(
        Object.keys(externalSenderSchemas) as ExternalSenderValue["type"][]
      )
      .required(),
  });
}) as yup.Lazy<ValidatedExternalSenderValue>;

// / This type represents the union of all possible validated tactic objects
type ValidatedExternalSenderValue = {
  [K in ExternalSenderValue["type"]]: yup.InferType<
    (typeof externalSenderSchemas)[K]
  >;
}[ExternalSenderValue["type"]];

export type ExternalSenderValue = WhatsappExternalSender;
