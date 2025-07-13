import * as yup from "yup";
import { WhatsappInbox, whatsappInbox } from "./whatsappInbox";

export * from "./whatsappInbox";

export const externalServiceInboxSchemas: Record<
  ExternalServiceInboxValue["type"],
  yup.ObjectSchema<ExternalServiceInboxValue>
> = {
  whatsapp: whatsappInbox,
} as any;

export const externalServiceInboxSchema = yup.lazy((value: any) => {
  if (!value) return yup.mixed().required();

  if (
    typeof value.type === "string" &&
    value.type in externalServiceInboxSchemas
  ) {
    return externalServiceInboxSchemas[
      value.type as ExternalServiceInboxValue["type"]
    ];
  }

  return yup.object({
    type: yup
      .mixed<ExternalServiceInboxValue["type"]>()
      .oneOf(
        Object.keys(
          externalServiceInboxSchemas
        ) as ExternalServiceInboxValue["type"][]
      )
      .required(),
  });
}) as yup.Lazy<ValidatedExternalServiceInboxValue>;

// / This type represents the union of all possible validated tactic objects
type ValidatedExternalServiceInboxValue = {
  [K in ExternalServiceInboxValue["type"]]: yup.InferType<
    (typeof externalServiceInboxSchemas)[K]
  >;
}[ExternalServiceInboxValue["type"]];

export type ExternalServiceInboxValue = WhatsappInbox;
