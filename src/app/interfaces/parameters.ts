export interface Parameters {
    company_name: string;
    trademark: string;
    adress: string;
    adress_complement: string;
    city: string;
    state: string;
    zip_code: string;
    social_networks: Array<String>;
    account: string;
    name: string;
    phones: Array<String>;
    number: string;
    type: string;
    country_code: string;
}

export interface ParameteresGetResponse {
    parameters: Array<Parameters>;
    cursor: string;
}
