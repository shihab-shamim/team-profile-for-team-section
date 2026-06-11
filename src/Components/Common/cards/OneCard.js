export const OneCard = ({ attributes }) => {
    const { profiles } = attributes || {};

    return (
        <section className="team_profiles-section">
            <div className="team_profiles-container">
                <div className="team_profiles-grid">

                    {profiles?.map((profile, index) => (
                        <div className="team_profiles-card" key={index}>
                            <div className="team_profiles-pic">
                                <img src={profile.image} alt={profile.name} />
                            </div>
                            <div className="team_profiles-content">
                                <h3 className="team_profiles-title">{profile.name}</h3>
                                <span className="team_profiles-post">{profile.designation}</span>
                            </div>
                            <ul className="team_profiles-social">
                                {profile.social?.map((item, sIndex) => (
                                    <li key={sIndex}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};