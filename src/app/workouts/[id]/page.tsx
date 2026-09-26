import React from 'react';

interface IworkoutDetailsPageProps{
    params:{
        id:string
    }
}

const workoutDetailsPage = ({params} :IworkoutDetailsPageProps  ) => {
    return (
        <div>
            workout  details page
        </div>
    );
};

export default workoutDetailsPage;