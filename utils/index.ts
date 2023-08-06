export async function fatchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f870479df4mshc1059901056db2ap17c64fjsn766e16d8ad1e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla"

    const response = await fetch(url, { headers })
    const result = response.json()

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const doller = 80;
    const basePricePerDay = 50 * doller; // Base rental price per day in ruppe
    const mileageFactore = 0.1 * doller; // Additional rate per mile driven
    const ageFactor = 0.05 * doller; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactore;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);

}