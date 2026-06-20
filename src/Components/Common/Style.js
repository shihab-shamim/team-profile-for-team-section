import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles = {}, alignment = 'center' } = attributes;

	const mainSl = `#${id}`;
	const team_section = `${mainSl} .team_profiles-section`;
	const team_container = `${team_section} .team_profiles-container`;
	const team_grid = `${team_container} .team_profiles-grid`;
	const team_profile = `${team_grid} .team_profiles-card`;
	const team_profile_pic = `${team_profile} .team_profiles-pic`;
	const team_title = `${team_profile} .team_profiles-content .team_profiles-title`;
	const team_post = `${team_profile} .team_profiles-content .team_profiles-post`;
	const team_social = `${team_profile} .team_profiles-social`;
	const team_social_link = `${team_social} li a`;

	const name = styles?.name || {};
	const designation = styles?.designation || {};
	const social = styles?.social || {};

	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', name?.typo)?.googleFontLink || ''}
		${getTypoCSS('', designation?.typo)?.googleFontLink || ''}

		${getTypoCSS(team_title, name?.typo)?.styles || ''}
		${getTypoCSS(team_post, designation?.typo)?.styles || ''}

		${team_section}{
			${getBackgroundCSS(styles?.bg)}
			padding:${getBoxCSS(styles?.padding?.desktop)};
			margin:${getBoxCSS(styles?.margin?.desktop)};
			border-radius:${getBoxCSS(styles?.radius)};
		}

		${team_grid}{
			grid-template-columns: repeat(${styles?.columns?.desktop || 4}, 1fr);
			column-gap: ${styles?.columnGap ?? 30}px;
			row-gap: ${styles?.rowGap ?? 30}px;
		}

		${team_profile}{
			${getBackgroundCSS(styles?.teamProfile?.bg)}
			padding:${getBoxCSS(styles?.teamProfile?.padding)};
			border-bottom: ${styles?.teamProfile?.border?.width} ${styles?.teamProfile?.border?.style} ${styles?.teamProfile?.border?.color};
			text-align: ${alignment};
		}

		${team_profile}:hover{
			border-bottom-color:${styles?.teamProfile?.hoverBorder} !important;
		}

		${team_profile_pic}::before{
			background:${styles?.teamProfile?.topShape};
		}

		${team_profile}:hover .team_profiles-pic::before {
			background: ${styles?.teamProfile?.hoverTopShape} !important;
		}

		${team_profile_pic}{
			width: ${styles?.teamProfile?.image?.width};
			height: ${styles?.teamProfile?.image?.height};
			margin-bottom: ${styles?.teamProfile?.image?.gap}px;
			border-radius:${getBoxCSS(styles?.teamProfile?.image?.radius)};
			img{
				object-fit: ${styles?.teamProfile?.image?.objectFit};
				border-radius:${getBoxCSS(styles?.teamProfile?.image?.radius)};
				box-shadow:${getMultiShadowCSS(styles?.teamProfile?.image?.shadow)};
			}
		}

		${team_profile}:hover .team_profiles-pic::after {
			background: ${styles?.teamProfile?.image?.bg} !important;
		}

		/* Name */
		${team_title}{
			color: ${name?.color || '#4e5052'};
			margin: ${getBoxCSS(name?.margin)};
		}
		${team_profile}:hover ${team_title}{
			color: ${name?.hoverColor || name?.color || '#4e5052'};
		}

		/* Designation */
		${team_post}{
			color: ${designation?.color || '#4e5052'};
			margin: ${getBoxCSS(designation?.margin)};
		}
		${team_profile}:hover ${team_post}{
			color: ${designation?.hoverColor || designation?.color || '#4e5052'};
		}

		/* Social bar */
		${team_social}{
			${getBackgroundCSS(social?.barBg)}
			justify-content: ${social?.alignment || 'center'};
			gap: ${social?.gap ?? 0}px;
		}
		${team_social_link}{
			color: ${social?.iconColor || '#ffffff'};
			padding: ${getBoxCSS(social?.padding)};
		}
		${team_social_link} svg{
			width: ${social?.iconSize || 17}px;
			height: ${social?.iconSize || 17}px;
		}
		${team_social_link}:hover{
			color: ${social?.iconHoverColor || '#2f2f2f'};
			${getBackgroundCSS(social?.iconHoverBg)}
		}
		${team_social_link}:hover svg{
			fill: ${social?.iconHoverColor || '#2f2f2f'};
		}

		${tabBreakpoint}{
			${team_grid}{
				grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
			}
			${team_section}{
				padding:${getBoxCSS(styles?.padding?.tablet)};
				margin:${getBoxCSS(styles?.margin?.tablet)};
			}
		}

		${mobileBreakpoint}{
			${team_grid}{
				grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
			}
			${team_section}{
				padding:${getBoxCSS(styles?.padding?.mobile)};
				margin:${getBoxCSS(styles?.margin?.mobile)};
			}
		}

	`}} />;
}
export default Style;
