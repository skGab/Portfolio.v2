import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function LoadingSkeleton() {
    return (
        <>
            <Skeleton height={50} width={50} />
            <Skeleton count={1} />
            <Skeleton count={1} />
        </>
    );
};

