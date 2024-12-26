import { startOfDay, subDays } from 'date-fns';

export const rangeOptions = {
    last_7_days: {
        label: "Last 7 Days",
        startDate: startOfDay(subDays(new Date(), 6)),
        endDate: new Date()
    },
    last_30_days: {
        label: "Last 30 Days",
        startDate: startOfDay(subDays(new Date(), 29)),
        endDate: new Date()
    },
    last_90_days: {
        label: "Last 90 Days",
        startDate: startOfDay(subDays(new Date(), 89)),
        endDate: new Date()
    },
    last_365_days: {
        label: "Last Year",
        startDate: startOfDay(subDays(new Date(), 364)),
        endDate: new Date()
    },
    all_time: {
        label: "All Time",
        startDate: null,
        endDate: null
    }
}
