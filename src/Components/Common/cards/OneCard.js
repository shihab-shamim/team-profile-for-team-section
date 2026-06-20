const normalizeIconColor = (svgString) => {
    if (!svgString) return svgString;
    return svgString
        .replace(/fill\s*=\s*["'][^"']*["']/gi, 'fill="currentColor"')
        .replace(/(<svg[^>]*)(>)/i, (match, p1, p2) => {
            if (!p1.includes('fill=')) {
                return p1 + ' fill="currentColor"' + p2;
            }
            return match;
        });
};

export const OneCard = ({ attributes }) => {
    const { profiles = [], options = {} } = attributes || {};

    return (
        <section className="team_profiles-section">
            <div className="team_profiles-container">
                <div className="team_profiles-grid">

                    {profiles?.map((profile, index) => (
                        <div className="team_profiles-card" key={index}>
                            <div className="team_profiles-pic">
                                {profile.image
                                    ? <img src={profile.image} alt={profile.name || ''} />
                                    : <div className="team_profiles-pic-placeholder" />
                                }
                            </div>
                            <div className="team_profiles-content">
                                {options?.showTitle && profile.name && <h3 className="team_profiles-title">{profile.name}</h3>}
                                {options?.showDesignation && profile.designation && <span className="team_profiles-post">{profile.designation}</span>}
                            </div>
                            {options?.showSocial && profile.social?.length > 0 && (
                                <ul className="team_profiles-social">
                                    {profile.social.map((item, sIndex) => (
                                        <li key={sIndex}>
                                            <a
                                                href={item.link || '#'}
                                                target={options?.openInNewTab ? '_blank' : '_self'}
                                                rel={options?.openInNewTab ? "noopener noreferrer" : ""}
                                                aria-label={profile.name}
                                                dangerouslySetInnerHTML={{ __html: normalizeIconColor(item.icon) }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default OneCard;
