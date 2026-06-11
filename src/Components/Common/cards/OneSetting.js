import {
    SelectControl,
    TextareaControl,
    TextControl,
    Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../utils/functions";
import { IconLibrary, InlineDetailMediaUpload } from "../../../../../bpl-tools/Components";

const OneSetting = (props) => {
    const { attributes, setAttributes, index } = props;
    const { profiles } = attributes || {};
    const item = profiles[index];
    const socials = item?.social || [];

    return (
        <div>
            <InlineDetailMediaUpload
                placeholder="url..."
                label={__("Image", "team-section")}
                value={{ url: item?.image }}
                onChange={(value) =>
                    setAttributes({
                        profiles: updateData(profiles, value.url, index, "image"),
                    })
                }
            />

            <TextControl
                className="mt10"
                placeholder="name..."
                label={__("Name", "team-section")}
                value={item?.name || ""}
                onChange={(val) =>
                    setAttributes({
                        profiles: updateData(profiles, val, index, "name"),
                    })
                }
            />

            <TextareaControl
                rows={1}
                placeholder="designation..."
                label={__("Designation", "team-section")}

                value={item?.designation || ""}
                onChange={(val) =>
                    setAttributes({
                        profiles: updateData(profiles, val, index, "designation"),
                    })
                }
            />

            {/* social gola map kore sundor kore dekhaw add, edit, delete icon ta diye */}
            <div className="bpl-social-settings" style={{ marginTop: '20px' }}>
                <style>{`
                    .bpl-social-icon-preview svg {
                        width: 20px !important;
                        height: 20px !important;
                        fill: currentColor !important;
                    }
                `}</style>
                <h4 style={{ marginBottom: '10px' }}>{__("Social Links", "team-section")}</h4>
                {socials.map((socialItem, sIndex) => (
                    <div key={sIndex} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span 
                                    className="bpl-social-icon-preview"
                                    dangerouslySetInnerHTML={{ __html: socialItem.icon || '' }} 
                                    style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px', color: '#555' }} 
                                />
                                <IconLibrary 
                                    label={" "}  
                                    onChange={(val) =>
                                        setAttributes({
                                            profiles: updateData(profiles, val, index, "social", sIndex, "icon"),
                                        })
                                    }  
                                />
                            </div>
                            <Button 
                                icon="trash" 
                                isDestructive
                                label={__("Delete", "team-section")}
                                onClick={() => {
                                    const newSocials = socials.filter((_, i) => i !== sIndex);
                                    setAttributes({
                                        profiles: updateData(profiles, newSocials, index, "social"),
                                    });
                                }} 
                            />
                        </div>
                        <TextControl
                            className="bpl-social-link-input"
                            label={__("Link", "team-section")}
                            placeholder="https://..."
                            value={socialItem.link || ''}
                            onChange={(val) =>
                                setAttributes({
                                    profiles: updateData(profiles, val, index, "social", sIndex, "link"),
                                })
                            }
                            style={{ marginBottom: '0' }}
                        />
                    </div>
                ))}
                <Button 
                    icon="plus"
                    isSecondary 
                    onClick={() => {
                        const newSocials = [...socials, { icon: "<svg viewBox='0 0 320 512' width='1em' height='1em' fill='currentColor'><path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'/></svg>", link: '#' }];
                        setAttributes({
                            profiles: updateData(profiles, newSocials, index, "social"),
                        });
                    }}
                    style={{ marginTop: '5px' }}
                >
                    {__("Add Social Link", "team-section")}
                </Button>
            </div>
        </div>
    );
};

export default OneSetting;
