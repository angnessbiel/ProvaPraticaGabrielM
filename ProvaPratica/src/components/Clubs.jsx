import React, { useEffect, useState } from 'react';

const Clubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch('https://api.cartola.globo.com/clubes')
            .then(response => response.json())
            .then(data => {
                const clubArray = Object.values(data);
                setClubs(clubArray);
            });
    }, []);

    return (
        <div className="clubs">
            {clubs.map(club => (
                <div key={club.id} className="club-card">
                    <img src={club.escudos['60x60']} alt={club.nome} />
                    <div className="club-info">
                        <h2>{club.nome}</h2>
                        <p>{club.apelido}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Clubs;
