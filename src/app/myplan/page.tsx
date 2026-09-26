"use client"
import { workoutContext } from '@/context/workoutContext';
import React, { useContext } from 'react';

const ListedPlan = () => {
    const {todayPlan}= useContext(workoutContext)
    return (
        <div className='container mx-auto w-10/11'>
            my Plan
        </div>
    );
};

export default ListedPlan;