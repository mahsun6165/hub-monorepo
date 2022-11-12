// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { UserId, UserIdT } from '../farcaster/user-id';


export class GetAllCastMessagesByUserRequest {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetAllCastMessagesByUserRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetAllCastMessagesByUserRequest(bb:flatbuffers.ByteBuffer, obj?:GetAllCastMessagesByUserRequest):GetAllCastMessagesByUserRequest {
  return (obj || new GetAllCastMessagesByUserRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetAllCastMessagesByUserRequest(bb:flatbuffers.ByteBuffer, obj?:GetAllCastMessagesByUserRequest):GetAllCastMessagesByUserRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetAllCastMessagesByUserRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

user(obj?:UserId):UserId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new UserId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startGetAllCastMessagesByUserRequest(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addUser(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, userOffset, 0);
}

static endGetAllCastMessagesByUserRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGetAllCastMessagesByUserRequest(builder:flatbuffers.Builder, userOffset:flatbuffers.Offset):flatbuffers.Offset {
  GetAllCastMessagesByUserRequest.startGetAllCastMessagesByUserRequest(builder);
  GetAllCastMessagesByUserRequest.addUser(builder, userOffset);
  return GetAllCastMessagesByUserRequest.endGetAllCastMessagesByUserRequest(builder);
}

unpack(): GetAllCastMessagesByUserRequestT {
  return new GetAllCastMessagesByUserRequestT(
    (this.user() !== null ? this.user()!.unpack() : null)
  );
}


unpackTo(_o: GetAllCastMessagesByUserRequestT): void {
  _o.user = (this.user() !== null ? this.user()!.unpack() : null);
}
}

export class GetAllCastMessagesByUserRequestT {
constructor(
  public user: UserIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const user = (this.user !== null ? this.user!.pack(builder) : 0);

  return GetAllCastMessagesByUserRequest.createGetAllCastMessagesByUserRequest(builder,
    user
  );
}
}
