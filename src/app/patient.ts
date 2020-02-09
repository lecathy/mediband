export class patient {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    id: string;
    dateOfBirth?: string;
    allergies?: string;
    medication?: medication [];
    medicalHistory?: medicalCondition[];
    religion?: string;
    donorStatus?: string;
    bloodType?: string;
    notes?: string;
}

export class medicalCondition {
    condition: string;
    description: string;
    date: string;
}

export class medication {
    name: string;
    condition: string;
    instructions: string;
    description: string;
}

export const patients: patient[]  = [
{
    firstName: "Marwan",
    lastName: "A Rahman",
    id: "5e3fcc281c9d440000b9d4bd",
    dateOfBirth: "06/11/2000",
    allergies: "Peanuts, Treenuts, Penicillin",
    medication: [
        {
            name: "Tylenol 3",
            condition: "Migraines",
            instructions: "Take one pill every 12 hours.",
            description: "Do not exceed 5 pills per day."
        },
        {
            name: "Reliever Inhalers",
            condition: "Asthma",
            instructions: "Take 2 puffs to alleviate tight chest symptoms.",
            description: "Replace every six months."
        }
    ],
    medicalHistory: [
        {
            condition: "Migraines",
            description: "Patient has been experiencing mild migraines regularly",
            date: "2020/02/08",
        },
        {
            condition: "High blood pressure",
            description: "Patient is in staage 2 hypertension.",
            date: "2020/02/07",
        },
        {
            condition: "H1N1",
            description: "Patient was hospitalized due to a high fever.",
            date: "2010/01/07",
        },
        {
            condition: "Asthma",
            description: "Patient experiences feelings of wheeziness after intensive physical activity.",
            date:" 2009/04/15",
        }
    ],
    religion: "Islam",
    donorStatus: "Organ Donor",
    bloodType: "A + ",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
},
{
    firstName: "Alex",
    lastName: "Fricke",
    id: "5e3fc8af1c9d440000b9d4bc",
    dateOfBirth: "05/31/2000",
    allergies: "Peanuts, Treenuts, Penicillin",
    medication: [
        {
            name: "Tylenol 3",
            condition: "Migraines",
            instructions: "Take one pill every 12 hours.",
            description: "Do not exceed 5 pills per day."
        },
        {
            name: "Reliever Inhalers",
            condition: "Asthma",
            instructions: "Take 2 puffs to alleviate tight chest symptoms.",
            description: "Replace every six months."
        }
    ],
    medicalHistory: [
        {
            condition: "Migraines",
            description: "Patient has been experiencing mild migraines regularly",
            date: "2020/02/08",
        },
        {
            condition: "High blood pressure",
            description: "Patient is in staage 2 hypertension.",
            date: "2020/02/07",
        },
        {
            condition: "H1N1",
            description: "Patient was hospitalized due to a high fever.",
            date: "2010/01/07",
        },
        {
            condition: "Asthma",
            description: "Patient experiences feelings of wheeziness after intensive physical activity.",
            date:" 2009/04/15",
        }
    ],
    religion: "Islam",
    donorStatus: "Organ Donor",
    bloodType: "A + ",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
},
{
    firstName: "Cathy",
    lastName: "Le",
    id: "5e3fb8661c9d440000b9d4b9",
    dateOfBirth: "06/11/2000",
    allergies: "Peanuts, Penicillin",
    medication: [
        {
            name: "Tylenol 3",
            condition: "Migraines",
            instructions: "Take one pill every 12 hours.",
            description: "Do not exceed 5 pills per day."
        },
        {
            name: "Reliever Inhalers",
            condition: "Asthma",
            instructions: "Take 2 puffs to alleviate tight chest symptoms.",
            description: "Replace every six months."
        }
    ],
    medicalHistory: [
        {
            condition: "Migraines",
            description: "Patient has been experiencing mild migraines regularly",
            date: "2020/02/08",
        },
        {
            condition: "High blood pressure",
            description: "Patient is in staage 2 hypertension.",
            date: "2020/02/07",
        },
        {
            condition: "H1N1",
            description: "Patient was hospitalized due to a high fever.",
            date: "2010/01/07",
        },
        {
            condition: "Asthma",
            description: "Patient experiences feelings of wheeziness after intensive physical activity.",
            date:" 2009/04/15",
        }
    ],
    religion: "Islam",
    donorStatus: "Organ Donor",
    bloodType: "A + ",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}
]