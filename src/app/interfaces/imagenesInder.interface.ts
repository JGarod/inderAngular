import { Caption, Links, MediaDetails, Meta } from "../models/imagenesInder.model";

export interface ImagenesInder {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Caption;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Caption;
    author: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: Meta;
    description: Caption;
    caption: Caption;
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: MediaDetails;
    post: null;
    source_url: string;
    _links: Links;
}

