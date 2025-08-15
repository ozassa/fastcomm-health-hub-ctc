/**
 * TypeScript definitions for analytics tracking
 */

export interface GtagFunction {
  (command: 'config', targetId: string, config?: Record<string, unknown>): void;
  (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void;
  (command: string, ...args: unknown[]): void;
}

export interface FbqFunction {
  (command: 'track', eventName: string, parameters?: Record<string, unknown>): void;
  (command: 'trackCustom', eventName: string, parameters?: Record<string, unknown>): void;
  (command: string, ...args: unknown[]): void;
}

export interface Lintrk {
  (command: 'track', params: { conversion_id: string }): void;
}

declare global {
  interface Window {
    gtag: GtagFunction;
    fbq: FbqFunction;
    lintrk: Lintrk;
  }
}

export interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  device_type?: string;
}

export interface LeadData extends UTMData {
  company?: string;
  role?: string;
  interest?: string;
  time_on_page?: number;
  scroll_depth?: number;
  tracking_id?: string;
}

export interface ErrorData extends UTMData {
  error_type?: string;
  fields_with_errors?: string[];
}

export interface FieldData extends UTMData {
  field: string;
  has_value?: boolean;
}

export interface EngagementData extends UTMData {
  time_on_page?: number;
  scroll_depth?: number;
  device_type?: string;
}

export interface TrackingParameters {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}