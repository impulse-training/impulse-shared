import { Log } from "../schemas/log";
import { BehaviorTrackingData } from "../schemas/log/behaviorLog";
import { Thread } from "../schemas/thread";
/**
 * Calculate behavior totals from logs
 * @param logs Array of logs to process
 * @returns Record of behavior totals by behavior ID
 */
export declare function sumBehaviorTotalsFromLogs(logs: Log[]): Record<string, BehaviorTrackingData>;
/**
 * Calculate behavior totals from multiple threads
 * @param threads Array of threads to process
 * @returns Record of behavior totals by behavior ID
 */
export declare function sumBehaviorDataTotalsFromThreads(threads: Thread[]): Record<string, BehaviorTrackingData>;
/**
 * Calculate behavior totals from a single thread (for backward compatibility)
 * @param thread Thread to process
 * @returns Record of behavior totals by behavior ID
 */
export declare function sumBehaviorDataTotalsFromThread(thread: Thread): Record<string, BehaviorTrackingData>;
