import concat = require('__PACKAGE__');
import { Writable } from 'stream';
const a: Writable = concat((value) => { const buffer: Buffer = value; });
concat({encoding:'string'}, (value) => { const text: string = value; });
concat({encoding:'array'}, (value) => { const numbers: number[] = value; });
concat({encoding:'uint8array'}, (value) => { const bytes: Uint8Array = value; });
concat({encoding:'object'}, (value) => { const objects: object[] = value; });
// @ts-expect-error callback is required
concat();
concat({encoding:'array'}, (values: bigint[]) => { const value: bigint = values[0]; });
concat({encoding:'array'}, (values: string[]) => { const value: string = values[0]; });
concat({encoding:'string'}, (value) => {
 // @ts-expect-error string encoding must not yield numbers
 const incorrect: number = value;
});
