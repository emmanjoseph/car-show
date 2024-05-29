'use client'
import React, { Fragment } from 'react';
import { CarProps } from '../Types';
import { Transition, Dialog } from '@headlessui/react';
import Image from 'next/image';
interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}


const CarDetails: React.FC<CarDetailsProps> = ({ isOpen, closeModal, car }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className='fixed inset-0 overflow-y-auto'>
                                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                                <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                           <Dialog.Panel className='relative w-full md:w-[50%] max-lg h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                            <button type="button"
                            onClick={closeModal}
                            className='absolute top-1 right-2 z-10 w-fit bg-white rounded-full p-3'
                            >
                              <Image
                              src='/close.svg'
                              alt='close'
                              height={20}
                               width={20} className='object-contain'/>
                            </button>

                            <div className='flex flex-1 flex-col gap-3'>
                                <div className="relative w-full h-40 bg-pattern bg-cover rounded-lg">
                                <Image
                    src='/hero.png'
                    alt='hero' // Provide descriptive alt text
                    fill priority
                    className="object-contain"
                />
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image
                                     src='/hero.png'
                                     alt='image' // Provide descriptive alt text
                                     fill priority
                                     className="object-contain"
                                     />
                                     
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image
                                     src='/hero.png'
                                     alt='image' // Provide descriptive alt text
                                     fill priority
                                     className="object-contain"
                                     />
                                     
                                    </div>
                                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                    <Image
                                     src='/hero.png'
                                     alt='image' // Provide descriptive alt text
                                     fill priority
                                     className="object-contain"
                                     />
                                     
                                    </div>

                                </div>

                                <div className="flex flex-1 flex-col gap-2">
                                    <h2 className='font-semibold text-xl capitalize\'>
                                        {car.make} {car.model}
                                    </h2>
                                    <div className="mt-3 flex flex-wrap gap-4">
                                        {Object.entries(car).map(([key,value])=>(
                                            <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                <h2 className='capitalize text-grey '>{key.split("_").join(" ")}</h2>
                                                <p className='text-black-100 font-semibold'>{value}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                           </Dialog.Panel>
                            </Transition.Child> 
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default CarDetails;
