
export class BaseballData {
    readonly teamCodeMap: Map<string, string> = new Map([
        ['bal', '110'],
        ['box', '111'],
        ['nya', '147'],
        ['tba', '139'],
        ['tor', '141'],
        ['cha', '145'],
        ['cle', '114'],
        ['det', '116'],
        ['kca', '118'],
        ['min', '142'],
        ['hou', '117'],
        ['ana', '108'],
        ['oak', '133'],
        ['sea', '136'],
        ['tex', '140'],
        ['atl', '144'],
        ['mia', '146'],
        ['nym', '121'],
        ['phi', '143'],
        ['was', '120'],
        ['chn', '112'],
        ['cin', '113'],
        ['mil', '158'],
        ['pit', '134'],
        ['sln', '138'],
        ['ari', '109'],
        ['col', '115'],
        ['lan', '119'],
        ['sdn', '135'],
        ['sfn', '137']
    ]);

    readonly teamIdToNameMap: Map<string, string> = new Map([
        ['110', 'Baltimore Orioles'],
        ['111', 'Boston Red Sox'],
        ['147', 'New York Yankees'],
        ['139', 'Tampa Bay Blue Rays'],
        ['141', 'Toronto Blue Jays'],
        ['145', 'Chicago White Sox'],
        ['114', 'Cleveland Indians'],
        ['116', 'Detroit Tigers'],
        ['118', 'Kansas City Royals'],
        ['142', 'Minnesota Twins'],
        ['117', 'Houston Astros'],
        ['108', 'Los Angeles Angeles'],
        ['133', 'Oakland Athletics'],
        ['136', 'Seattle Mariners'],
        ['140', 'Texas Rangers'],
        ['144', 'Atlanta Braves'],
        ['146', 'Miami Marlins'],
        ['121', 'New York Mets'],
        ['143', 'Philadelphia Pillies'],
        ['120', 'Washington Nationals'],
        ['112', 'Chicago Cubs'],
        ['113', 'Cincinnati Reds'],
        ['158', 'Milwaukee Brewers'],
        ['134', 'Pittsburgh Pirates'],
        ['138', 'St. Louis Cardinals'],
        ['109', 'Arizona Diamondbacks'],
        ['115', 'Colorado Rockies'],
        ['119', 'Los Angeles Dodgers'],
        ['135', 'San Diego Padres'],
        ['137', 'San Francisco Giants']
    ]);

    readonly teamCodeToNameMap: Map<string, string> = new Map ([
        ['bal', 'Baltimore Orioles'],
        ['box', 'Boston Red Sox'],
        ['nya', 'New York Yankees'],
        ['tba', 'Tampa Bay Blue Rays'],
        ['tor', 'Toronto Blue Jays'],
        ['cha', 'Chicago White Sox'],
        ['cle', 'Cleveland Indians'],
        ['det', 'Detroit Tigers'],
        ['kca', 'Kansas City Royals'],
        ['min', 'Minnesota Twins'],
        ['hou', 'Houston Astros'],
        ['ana', 'Los Angeles Angeles'],
        ['oak', 'Oakland Athletics'],
        ['sea', 'Seattle Mariners'],
        ['tex', 'Texas Rangers'],
        ['atl', 'Atlanta Braves'],
        ['mia', 'Miami Marlins'],
        ['nym', 'New York Mets'],
        ['phi', 'Philadelphia Pillies'],
        ['was', 'Washington Nationals'],
        ['chn', 'Chicago Cubs'],
        ['cin', 'Cincinnati Reds'],
        ['mil', 'Milwaukee Brewers'],
        ['pit', 'Pittsburgh Pirates'],
        ['sln', 'St. Louis Cardinals'],
        ['ari', 'Arizona Diamondbacks'],
        ['col', 'Colorado Rockies'],
        ['lan', 'Los Angeles Dodgers'],
        ['sdn', 'San Diego Padres'],
        ['sfn', 'San Francisco Giants']
    ])
}
