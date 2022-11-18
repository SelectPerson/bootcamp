import { Strategy } from 'passport-jwt';
import { ProfileObject } from '../../types/ProfileObject';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: ProfileObject): Promise<{
        payload: ProfileObject;
    }>;
}
export {};
