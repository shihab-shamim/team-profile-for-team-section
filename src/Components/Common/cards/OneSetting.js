import {
    SelectControl,
    TextareaControl,
    TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../utils/functions";
import { InlineDetailMediaUpload } from "../../../../../bpl-tools/Components";

const OneSetting = (props) => {
    const { attributes, setAttributes, index } = props;
    const { cards } = attributes;
    const item = cards[index];

    return (
        <div>
            <InlineDetailMediaUpload
                placeholder="url..."
                label={__("Image", "info-cards")}
                value={{ url: item?.image }}
                onChange={(value) =>
                    setAttributes({
                        cards: updateData(cards, value.url, index, "image"),
                    })
                }
            />

            <TextControl
                className="mt10"
                placeholder="title..."
                label={__("Title", "info-cards")}
                value={item?.title || ""}
                onChange={(val) =>
                    setAttributes({
                        cards: updateData(cards, val, index, "title"),
                    })
                }
            />

            <TextareaControl
                rows={2}
                placeholder="description..."
                label={__("Description", "info-cards")}
                value={item?.description || ""}
                onChange={(val) =>
                    setAttributes({
                        cards: updateData(cards, val, index, "description"),
                    })
                }
            />

            <TextControl
                placeholder="link..."
                label={__("Link", "info-cards")}
                value={item?.link || ""}
                onChange={(val) =>
                    setAttributes({
                        cards: updateData(cards, val, index, "link"),
                    })
                }
            />

            {/* Wave Path */}
            <SelectControl
                label={__("Wave Shape Type", "info-cards")}
                value={item?.wavePath || ""}
                options={[
                    { label: "Narcisse", value: "narcisse" },
                    { label: "Lycoris", value: "lycoris" },
                    { label: "Tulipe", value: "tulipe" },
                ]}
                onChange={(val) =>
                    setAttributes({
                        cards: updateData(cards, val, index, "wavePath"),
                    })
                }
            />
        </div>
    );
};

export default OneSetting;
