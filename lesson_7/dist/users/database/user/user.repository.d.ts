import { Model } from 'mongodb';
import { UserDocument } from './user.schema';
export declare class UserRepository {
    protected readonly userModel: Model<UserDocument>;
    constructor(userModel: Model<UserDocument>);
    create(): Promise<void>;
    findAll(filter: object): any;
}
