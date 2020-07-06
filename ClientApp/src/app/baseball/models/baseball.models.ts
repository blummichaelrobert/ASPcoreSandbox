export class BaseballPlayer {
    playerId: string;
    teamId: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    heightWeight?: string;
    atBats?: string;
    battingAverage?: string;
    homeRuns?: string;
    runsBattedIn?: string;
    onBasePercentage?: string;
    hits?: string;
    doubles?: string;
    triples?: string;
}

export class HittingStats {
    atBats?: string;
    battingAverage?: string;
    homeRuns?: string;
    runsBattedIn?: string;
    onBasePercentage?: string;
    hits?: string;
    doubles?: string;
    triples?: string;
}

export class PitchingStats {
    earnedRunAverage: string;
    strikeOuts: string;
    inningsPitched: string;
    hitAllowedAvgPer9Innings: string;
    walks: string;
    whip: string;
}

export class Pitcher {
    playerId: string;
    teamId: string;
    firstName?: string;
    lastName?: string;
    heightWeight?: string;
    earnedRunAverage?: string;
    strikeOuts?: string;
    inningsPitched?: string;
    hitAllowedAvgPer9Innings?: string;
    walks?: string;
    whip?: string;
}
