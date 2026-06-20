  import { __ } from "@wordpress/i18n";
  import {
    PanelBody,PanelRow,BorderControl , __experimentalUnitControl as UnitControl,RangeControl,
    SelectControl
  } from "@wordpress/components";
  import { Background ,BoxControl,Label,Device,ColorControl, ShadowControl, Typography} from "../../../../../../bpl-tools/Components";
  import { updateData } from "../../../../utils/functions";

  const Style = ({ attributes, setAttributes ,device}) => {
    const { styles={}, options={} } = attributes ||  {};



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

                    <ShadowControl label="Image Shadow" value={styles?.teamProfile?.image?.shadow}  onChange={(v)=> setAttributes({ styles: updateData(styles,v,"teamProfile","image","shadow")})}/>

  </PanelBody>


  {/* ── Name ─────────────────────────────────────────── */}
  {options?.showTitle && (
  <PanelBody className="bPlPanelBody" title={__("Name", "team-section")} initialOpen={false}>
    <ColorControl label={__("Color", "team-section")} value={styles?.name?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"name","color")})}/>


    <BoxControl className="mt15" label={__("Margin", "team-section")} values={styles?.name?.margin} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"name","margin")})}/>

    <Typography className="mt15" label={__("Typography", "team-section")} value={styles?.name?.typo} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"name","typo")})}/>
  </PanelBody>
  )}

  {/* ── Designation ──────────────────────────────────── */}
  {options?.showDesignation && (
  <PanelBody className="bPlPanelBody" title={__("Designation", "team-section")} initialOpen={false}>
    <ColorControl label={__("Color", "team-section")} value={styles?.designation?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"designation","color")})}/>


    <BoxControl className="mt15" label={__("Margin", "team-section")} values={styles?.designation?.margin} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"designation","margin")})}/>

    <Typography className="mt15" label={__("Typography", "team-section")} value={styles?.designation?.typo} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"designation","typo")})}/>
  </PanelBody>
  )}

  {/* ── Social Icons ─────────────────────────────────── */}
  {options?.showSocial && (
  <PanelBody className="bPlPanelBody" title={__("Social Icons", "team-section")} initialOpen={false}>
    <Background label={__("Bar Background", "team-section")} value={styles?.social?.barBg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","barBg")})}/>

    <ColorControl className="mt15" label={__("Icon Color", "team-section")} value={styles?.social?.iconColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","iconColor")})}/>

    <ColorControl className="mt10" label={__("Icon Hover Color", "team-section")} value={styles?.social?.iconHoverColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","iconHoverColor")})}/>

    <Background className="mt15" label={__("Icon Hover Background", "team-section")} value={styles?.social?.iconHoverBg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","iconHoverBg")})}/>

    <RangeControl className="mt15" label={__("Icon Size (px)", "team-section")} value={styles?.social?.iconSize} min={8} max={40} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","iconSize")})}/>

    <BoxControl className="mt15" label={__("Padding", "team-section")} values={styles?.social?.padding} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","padding")})}/>

    <RangeControl className="mt15" label={__("Gap Between Icons (px)", "team-section")} value={styles?.social?.gap} min={0} max={60} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","gap")})}/>

    <SelectControl className="mt15" label={__("Alignment", "team-section")} value={styles?.social?.alignment} options={[
      { label: __("Left", "team-section"), value: "flex-start" },
      { label: __("Center", "team-section"), value: "center" },
      { label: __("Right", "team-section"), value: "flex-end" },
      { label: __("Space Between", "team-section"), value: "space-between" },
      { label: __("Space Around", "team-section"), value: "space-around" },
    ]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"social","alignment")})}/>

  </PanelBody>
  )}


      </>
    );
  };

  export default Style;
