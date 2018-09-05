export interface IPromotion {
    // From ACS Template
    promotionOrChallengeCode: string;
    isTrending: string;
    keyword: string;
    resolveIssues: string;
    fulfillment: string;
    partnerCodes: string;
    howToEarn: string;
    registrationRequired: string;
    targetedPromotion: string;
    pstcodes: string;
    directmailer: string;
    marketingpageurl: string;
    emailurl: string;

    // From AR5
    promotionName: string;
    aacomview: string;
    termsandconditions: string;

    // From Ventana
    promoStartDate: string;
    promoEndDate: string;
    tac: string;
    memRegStartDate: string;
    memRegEndDate: string;
    memTravelStartDate: string;
    memTravelEndDate: string;
    lateRegEndDate: string;

}
