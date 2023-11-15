export class Links {
    constructor(
        public self: About[],
        public collection: About[],
        public about: About[],
        public author: Author[],
        public replies: Author[],
    ) {

    }
}


export class About {
    constructor(
        public href: string,
    ) {

    }
}

export class Author {
    constructor(
        public embeddable: boolean,
        public href: string,
    ) {

    }
}

export class Caption {
    constructor(
        public rendered: string,
    ) {

    }
}


export class MediaDetails {
    constructor(
        public width: number,
        public height: number,
        public file: string,
        public filesize: number,
        public sizes: { [key: string]: Size },
        public image_meta: ImageMeta,
    ) {

    }
}

export class ImageMeta {
    constructor(
        public aperture: string,
        public credit: string,
        public camera: string,
        public caption: string,
        public created_timestamp: string,
        public copyright: string,
        public focal_length: string,
        public iso: string,
        public shutter_speed: string,
        public title: string,
        public orientation: string,
        public keywords: any[],
    ) {

    }
}


export class Size {
    constructor(
        public file: string,
        public width: number,
        public height: number,
        public mime_type: string,
        public source_url: string,
        public filesize?: number,

    ) {

    }
}


export class Meta {
    constructor(
        public _et_pb_use_builder: string,
        public _et_pb_old_content: string,
        public _et_gb_content_width: string,


    ) {

    }
}










