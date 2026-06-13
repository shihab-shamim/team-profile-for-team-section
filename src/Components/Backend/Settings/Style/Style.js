  import { __ } from "@wordpress/i18n";
  import {
    PanelBody,PanelRow,BorderControl , __experimentalUnitControl as UnitControl,RangeControl,
    SelectControl
  } from "@wordpress/components";
  import { Background ,BoxControl,Label,Device,ColorControl} from "../../../../../../bpl-tools/Components";
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
          
          <BoxControl  className='mt15' label="Radius"  values={styles?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"radius")})}/>

        </PanelBody>


  <PanelBody className="bPlPanelBody"
          title={__("Team Profile", "team-section")}
          initialOpen={false}>
            <Background label={__("Background", "team-section")} value={styles?.teamProfile?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","bg")})}  />

              <BoxControl className='mt15' label="Padding"  values={styles?.teamProfile?.padding} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","padding")})}/>

                <ColorControl className="mt15" label="Top Shape Color" value={styles?.teamProfile?.topShape} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","topShape")})}/>

                <ColorControl className="mt15" label="Hover Top Shape Color" value={styles?.teamProfile?.hoverTopShape} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","hoverTopShape")})}/>

                <Label>Border Bottom</Label>

                <BorderControl value={styles?.teamProfile?.border} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","border")})}/>

                  <ColorControl className="mt15" label="Hover Border Bottom Color" value={styles?.teamProfile?.hoverBorder} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","hoverBorder")})}/>



  </PanelBody>

  <PanelBody className="bPlPanelBody"
          title={__("Image Settings", "team-section")}
          initialOpen={false}>
            <ColorControl className="mt15" label="Hover Background" value={styles?.teamProfile?.image?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","bg")})}/>

            <UnitControl  label="Width" value={styles?.teamProfile?.image?.width} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","width")})}/>

                <UnitControl className="mt15"  label="Height" value={styles?.teamProfile?.image?.height} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","height")})}/>

                  <BoxControl className="mt15" label="Radius" values={styles?.teamProfile?.image?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","radius")})}/>

                  <RangeControl className="mt15"  label="Gap" value={styles?.teamProfile?.image?.gap} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","gap")})}/>

                    <SelectControl options={[
                      { label: "Contain", value: "contain" },
                      { label: "Cover", value: "cover" },
                      { label: "Fill", value: "fill" },
                      { label: "Scale Down", value: "scale-down" },
                      { label: "None", value: "none" },
                    ]} className="mt15" label="Image Fit" value={styles?.teamProfile?.image?.objectFit} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","objectFit")})}/> 
                      



  

  </PanelBody>


      </>
    );
  };

  export default Style;
