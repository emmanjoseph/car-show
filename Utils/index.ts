import { FilterProps } from "../Types";

export async function fetchCars(filters: FilterProps) {
    const headers = {
        'X-RapidAPI-Key': 'bbb30adc07mshdeef134c36ab53ap19b6e2jsn19f395cabbd2',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`, {
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Failed to fetch cars:", error);
        throw error; // Re-throw the error after logging it
    }
}

export const updateSearchParams = (type: string, value: string) => {
    if (typeof window !== 'undefined') {
        // Get the current URL search params
        const searchParams = new URLSearchParams(window.location.search);

        // Set the specified search parameter to the given value
        searchParams.set(type, value);

        // Generate the new pathname with updated search params
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        return newPathname;
    }
    return ''; // Return an empty string if window is not defined
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0); // Returns the rate as a string with no decimal places
};
