'use client'
import { useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { CarProps } from "../Types";
import { calculateCarRent } from "../Utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 font-extrabold text-[32px]">
                <span className="self-start text-[14px]">$</span>
                {carRent}
                <span className="self-end text-[14px]">/day</span>
            </p>
            <div className="w-full relative h-40 my-3 object-contain">
                <Image
                    src='/hero.png'
                    alt={`${make} ${model}`} // Provide descriptive alt text
                    fill priority
                    className="object-contain"
                />
            </div>
            <div className="relative w-full flex mt-2">
                <div className="flex justify-between group-hover:invisible w-full text-gray">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src='/steering-wheel.svg'
                            alt="Steering Wheel"
                            width={20}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src='/tire.svg'
                            alt="Tire"
                            width={20}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src='/gas.svg'
                            alt="Gas"
                            width={20}
                            height={20}
                        />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="View more"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            {isOpen && (
                <CarDetails car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
            )}
        </div>
    );
}

export default CarCard;
