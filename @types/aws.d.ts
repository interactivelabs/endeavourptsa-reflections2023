export interface _Object {
    Key?: string;
    ETag?: string;
    Size?: number;
}

export interface ListObjectsV2CommandOutput { Contents?: _Object[]; }