export const formatPhoneNumber = (phoneNumber) => { 
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Extract country code, area code, and remaining digits
    const countryCode = cleanedPhoneNumber.substring(0, 1);
    const areaCode = cleanedPhoneNumber.substring(1, 4);
    const remainingDigits = cleanedPhoneNumber.substring(4);

    // Format the phone number with the desired format
    const formattedPhoneNumber = `+${countryCode} ${areaCode} ${remainingDigits}`;

    return formattedPhoneNumber;
}


