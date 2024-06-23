import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div className='flex-col gap-4'>
            <Link href={'/about/history/vission'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default AboutContents;