// StarCount.tsx

// Defines the correlation between stars and tier
export const getStarCount = (tier: string) => {
    switch (tier) {
        case 's':
            return 5;
        case 'a':
            return 4;
        case 'b':
            return 3;
        case 'c':
            return 2;
        case 'd':
            return 1;
        case 'Unranked':
            return 0;
        default:
            return 0;
    }
};
