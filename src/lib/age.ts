'use client'; // if using Next.js App Router

import { useMemo } from 'react';

export default function GetAge() {
  
  const age = useMemo(() => {
    const birthDate = new Date('2005-06-21'); // 🎂 your birthday here
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    
    // Adjust if birthday hasn't occurred yet this year
    const hasHadBirthday =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthday) {
      years -= 1;
    }

    return years;
  }, []);

  return age;
}
