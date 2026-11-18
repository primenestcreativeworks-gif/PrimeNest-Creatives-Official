export interface ResultMetric {
  id: string;
  clientType: string;
  serviceType: string;
  metricText: string;
  numericCount?: number;
  numericSuffix?: string;
  secondaryCount?: number;
  secondarySuffix?: string;
  note?: string;
}

/**
 * Results data file.
 * NOTE FOR CLIENT: Replace placeholders below with your verified numbers.
 * Any card containing bracketed placeholders (e.g. [RESULT_...]) will be automatically
 * excluded from the live render until filled in.
 */
export const resultsData: ResultMetric[] = [
  {
    id: 'res-1',
    clientType: 'Travel company',
    serviceType: 'Content editing',
    // Replace with verified numbers: e.g. "12K -> 145K in 4 months"
    metricText: '[RESULT_1_FROM] -> [RESULT_1_TO] in [TIME]',
  },
  {
    id: 'res-2',
    clientType: 'Coaching institute',
    serviceType: 'Short-form + 3 podcasts a month',
    // Replace with verified numbers: e.g. "45K -> 210K in 3 months"
    metricText: '[RESULT_2_FROM] -> [RESULT_2_TO] in 3 months',
  },
  {
    id: 'res-3',
    clientType: "Finance firm's in-house creator",
    serviceType: 'Personal brand',
    // Replace with verified numbers: e.g. "+380% Average View Duration"
    metricText: '[RESULT_3]',
  },
  {
    id: 'res-4',
    clientType: 'Podcast creator',
    serviceType: 'Full YouTube production and management',
    metricText: '3 podcasts + 20 shorts every month',
    numericCount: 3,
    numericSuffix: ' podcasts',
    secondaryCount: 20,
    secondarySuffix: ' shorts/mo',
    note: 'Predictable monthly publishing cadence delivered with zero missed deadlines.',
  },
];

/**
 * Filter out any item that still has unfilled bracketed placeholders like [RESULT_1_FROM]
 */
export function getActiveResults(): ResultMetric[] {
  return resultsData.filter((item) => {
    // If text contains bracketed placeholder like "[RESULT" or "[TIME", hide from live site
    return !/\[.*?\]/.test(item.metricText);
  });
}
