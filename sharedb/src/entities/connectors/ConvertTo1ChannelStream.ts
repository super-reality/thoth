import { Transform } from 'stream'

function convertBufferTo1Channel(buffer: any) {
  const convertedBuffer = Buffer.alloc(buffer.length / 2)

  for (let i = 0; i < convertedBuffer.length / 2; i++) {
    const uint16 = buffer.readUInt16LE(i * 4)
    convertedBuffer.writeUInt16LE(uint16, i * 2)
  }

  return convertedBuffer
}

export class ConvertTo1ChannelStream extends Transform {
  constructor(source: any, options: any) {
    super(options)
  }

  _transform(data: any, encoding: any, next: any) {
    next(null, convertBufferTo1Channel(data))
  }
}
