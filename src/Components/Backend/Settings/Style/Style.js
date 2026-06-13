import { __ } from "@wordpress/i18n";
import {
  PanelBody,PanelRow
} from "@wordpress/components";
import { Background ,BoxControl,Label,Device} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes ,device}) => {
  const { styles={} } = attributes ||  {};



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Container", "team-section")}
        initialOpen={false}
      >
        <Background label={__("Background", "team-section")} value={styles?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"bg")})}  />

          <PanelRow><Label>Padding</Label><Device/></PanelRow>
        
        <BoxControl  values={styles?.padding[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"padding",device)})}/>

            <PanelRow><Label>Margin</Label><Device/></PanelRow>
        
        <BoxControl  values={styles?.margin[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"margin",device)})}/>
        
        <BoxControl className='mt15' label="Radius"  values={styles?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"radius")})}/>

      </PanelBody>

    </>
  );
};

export default Style;
