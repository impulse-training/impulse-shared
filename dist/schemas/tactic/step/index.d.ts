import { z } from "zod";
export * from "./affirmation";
export * from "./base";
export * from "./breathing";
export * from "./default";
export * from "./media";
export * from "./pedometer";
export * from "./notifySupport";
export * from "./question";
import { AffirmationStep } from "./affirmation";
import { BreathingStep } from "./breathing";
import { DefaultStep } from "./default";
import { MediaStep } from "./media";
import { PedometerStep } from "./pedometer";
import { NotifySupportStep } from "./notifySupport";
import { QuestionStep } from "./question";
export declare const tacticStepSchema: z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodOptional<z.ZodLiteral<"default">>;
    text: z.ZodString;
    durationSeconds: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    text: string;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
    mode?: "default" | undefined;
    durationSeconds?: number | undefined;
}, {
    text: string;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
    mode?: "default" | undefined;
    durationSeconds?: number | undefined;
}>, z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"breathing">;
    breathingPattern: z.ZodObject<{
        inhale: z.ZodNumber;
        hold: z.ZodOptional<z.ZodNumber>;
        exhale: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        inhale: number;
        exhale: number;
        hold?: number | undefined;
    }, {
        inhale: number;
        exhale: number;
        hold?: number | undefined;
    }>;
    cycles: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    mode: "breathing";
    breathingPattern: {
        inhale: number;
        exhale: number;
        hold?: number | undefined;
    };
    text?: string | undefined;
    cycles?: number | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    mode: "breathing";
    breathingPattern: {
        inhale: number;
        exhale: number;
        hold?: number | undefined;
    };
    text?: string | undefined;
    cycles?: number | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>, z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"notifySupport">;
    groupId: z.ZodString;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    mode: "notifySupport";
    groupId: string;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    text: string;
    mode: "notifySupport";
    groupId: string;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>, z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"question-text">;
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
    text: z.ZodString;
} & {
    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    text: string;
    mode: "question-text";
    id?: string | undefined;
    createdAt?: import("../../../types").Timestamp | undefined;
    updatedAt?: import("../../../types").Timestamp | undefined;
    suggestedResponses?: string[] | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    text: string;
    mode: "question-text";
    id?: string | undefined;
    createdAt?: import("../../../types").Timestamp | undefined;
    updatedAt?: import("../../../types").Timestamp | undefined;
    suggestedResponses?: string[] | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>, z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"question-slider1To10">;
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
    text: z.ZodString;
} & {
    sliderConfig: z.ZodObject<{
        minLabel: z.ZodOptional<z.ZodString>;
        maxLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    mode: "question-slider1To10";
    id?: string | undefined;
    createdAt?: import("../../../types").Timestamp | undefined;
    updatedAt?: import("../../../types").Timestamp | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    mode: "question-slider1To10";
    id?: string | undefined;
    createdAt?: import("../../../types").Timestamp | undefined;
    updatedAt?: import("../../../types").Timestamp | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>, z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"media">;
    media: z.ZodArray<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    mode: "media";
    media: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }[];
    text?: string | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    mode: "media";
    media: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }[];
    text?: string | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>, z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"affirmation">;
    text: z.ZodDefault<z.ZodString>;
    affirmationText: z.ZodString;
    repeatCount: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    text: string;
    mode: "affirmation";
    affirmationText: string;
    repeatCount: number;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    mode: "affirmation";
    affirmationText: string;
    text?: string | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
    repeatCount?: number | undefined;
}>, z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"pedometer">;
    targetSteps: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    mode: "pedometer";
    targetSteps: number;
    text?: string | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    mode: "pedometer";
    targetSteps: number;
    text?: string | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>]>;
export type TacticStep = z.infer<typeof tacticStepSchema>;
export declare const stepIsMediaStep: (step: TacticStep) => step is MediaStep;
export declare const stepIsQuestionStep: (step: TacticStep) => step is QuestionStep;
export declare const stepIsBreathingStep: (step: TacticStep) => step is BreathingStep;
export declare const stepIsNotifySupportStep: (step: TacticStep) => step is NotifySupportStep;
export declare const stepIsDefaultStep: (step: TacticStep) => step is DefaultStep;
export declare const stepIsAffirmationStep: (step: TacticStep) => step is AffirmationStep;
export declare const stepIsPedometerStep: (step: TacticStep) => step is PedometerStep;
export type { BreathingStep, DefaultStep, MediaStep, PedometerStep, NotifySupportStep, QuestionStep, };
