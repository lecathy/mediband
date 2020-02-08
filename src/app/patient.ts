export class patient {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    id: string;
    dateOfBirth?: string;
    allergies?: string [];
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

export const patient1: patient  = 
{
    firstName: "Marwan",
    lastName: "A Rahman",
    id: "123456789",
    dateOfBirth: "06/11/2000",
    allergies: [
        "Peanuts",
        "Treenuts",
        "Penicillin",
    ],
    medication: [
        {
            name: "Tylenol 3",
            condition: "Migraines",
            instructions: "Take one pill every 12 hours.",
            description: "Do not exceed 5 pills per day."
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
        }
    ],
    religion: "Islam",
    donorStatus: "Donor",
    bloodType: "A + ",
}