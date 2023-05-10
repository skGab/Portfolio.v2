import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function LoadingSkeleton() {
    return (
        <Skeleton height={130} width={230} borderRadius={15} baseColor='#5252523b' highlightColor='#17171848' />
    );
};

