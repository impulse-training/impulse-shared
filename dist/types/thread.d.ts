/**
 * Thread Types
 *
 * TypeScript type definitions for thread data
 */
import { InferType } from 'yup';
import { threadSchema } from '../schemas/thread';
import { Log } from './log';
export type Thread = InferType<typeof threadSchema> & {
    logs?: Log[];
    type: 'impulse' | 'general' | 'dayRecap';
};
export declare const isThread: (value: unknown) => value is Thread;
