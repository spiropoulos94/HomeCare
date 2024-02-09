export const professions = [
  {
    label: 'Admin',
    value: 'admin',
    services: []
  },
  {
    label: 'Social Worker/Psychologist',
    value: 'social_worker_psychologist',
    services: [
      { label: 'Psychological, Social support', value: 'psychological_social_support' },
      { label: 'Orientation to elders for their rights', value: 'orientation_elders_rights' },
      { label: 'Support contacting the appropriate agency', value: 'contact_appropriate_agency' },
      { label: 'EFKA medical documentation submission', value: 'efka_documentation_submission' }
    ]
  },
  {
    label: 'Doctor',
    value: 'doctor',
    services: [
      { label: 'Prescription', value: 'prescription' },
      { label: 'Clinical Examination', value: 'clinical_examination' },
      { label: 'Catheterize', value: 'catheterize' }
    ]
  },
  {
    label: 'Nurse',
    value: 'nurse',
    services: [
      { label: 'Measurement of vital points', value: 'measure_vital_points' },
      { label: 'Body wash', value: 'body_wash' },
      { label: 'Local ministration', value: 'local_ministration' },
      { label: 'Intramuscular injections', value: 'intramuscular_injections' },
      { label: 'Sores - Injury treatment', value: 'sores_injury_treatment' },
      { label: 'Catheter placement', value: 'catheter_placement' },
      { label: 'Enema', value: 'enema' },
      { label: 'Alimentation with Levin', value: 'alimentation_levin' },
      { label: 'Prescription', value: 'nurse_prescription' },
      { label: 'Medicine purchase', value: 'medicine_purchase' },
      { label: 'Medical appointment', value: 'medical_appointment' }
    ]
  },
  {
    label: 'Physiotherapist',
    value: 'physiotherapist',
    services: [
      { label: 'Physiotherapy', value: 'physiotherapy' },
      { label: 'Kinesitherapy', value: 'kinesitherapy' }
    ]
  },
  {
    label: 'Family Helper',
    value: 'family_helper',
    services: [
      { label: 'Yard Cleaning', value: 'yard_cleaning' },
      { label: 'Sweeping/Mopping', value: 'sweeping_mopping' },
      { label: 'Meal preparation', value: 'meal_preparation' },
      { label: 'Food supply', value: 'food_supply' },
      { label: 'Other', value: 'other' }
    ]
  }
];
