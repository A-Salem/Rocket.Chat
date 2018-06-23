import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// mutations
import * as setStatus from './setStatus';
import * as setMood from './setMood';
// types
import * as UserType from './User-type';
import * as UserStatus from './UserStatus-enum';
import * as UserMood from './UserMood-enum';

export const schema = mergeTypes([
	// mutations
	setStatus.schema,
	setMood.schema,
	// types
	UserType.schema,
	UserStatus.schema,
	UserMood.schema
]);

export const resolvers = mergeResolvers([
	// mutations
	setStatus.resolver,
	setMood.resolver,
	// types
	UserType.resolver
]);
