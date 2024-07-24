'use client'

import React, { useState, useEffect } from 'react';
import MatchesApi from "../api/Matches";

const MainCard = () => {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            const data = await MatchesApi();
            setMatches(data);
        };
        fetchMatches();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="flex flex-col align-middle items-center m-8 p-5 bg-cardbackground">
            <h2 className="text-2xl font-semibold text-objbw">Top Game Events</h2>
            <div className="my-4 z-10">
                {/* Check if matches is not null and then render the matches */}
                {matches ? (
                    matches.map((match: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                        <div key={index}>
                            {/* Render your match data here */}
                            <p>{match.name}</p>
                            {/* Add more match details as needed */}
                        </div>
                    ))
                ) : (
                    <div className="loader">
                        <span></span>
                    </div> 
                )}
            </div>
        </div>
    );
};

export default MainCard;