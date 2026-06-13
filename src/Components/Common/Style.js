import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getMultiShadowCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const {styles = {} } = attributes;

	const mainSl = `#${id}`;
	const team_section = `${mainSl} .team_profiles-section`;
	const team_container = `${team_section} .team_profiles-container`;
	const team_grid = `${team_container} .team_profiles-grid`;
	const team_profile = `${team_grid} .team_profiles-card`;
	const team_profile_pic = `${team_profile} .team_profiles-pic`;


	return <style dangerouslySetInnerHTML={{
		__html: `


		${team_section}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)}; 
		border-radius:${getBoxCSS(styles?.radius)};
		}

		${team_grid}{
			grid-template-columns: repeat(${styles?.columns?.desktop || 4}, 1fr);
			column-gap: ${styles?.columnGap || 30}px;
			row-gap: ${styles?.rowGap || 30}px;
			
			

		
		}
			${team_profile}{
			${getBackgroundCSS(styles?.teamProfile?.bg)}
			padding:${getBoxCSS(styles?.teamProfile?.padding)};
		    border-bottom: ${styles?.teamProfile?.border?.width} ${styles?.teamProfile?.border?.style} ${styles?.teamProfile?.border?.color};

			}

			${team_profile}:hover{
				border-bottom-color:${styles?.teamProfile?.hoverBorder} !important;
			}

			${team_profile_pic}::before{
			background:${styles?.teamProfile?.topShape} ;

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