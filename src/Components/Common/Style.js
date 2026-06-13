import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const {styles = {} } = attributes;

	const mainSl = `#${id}`;
	const team_section = `${mainSl} .team_profiles-section`;
	const team_container = `${team_section} .team_profiles-container`;
	const team_grid = `${team_container} .team_profiles-grid`;


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