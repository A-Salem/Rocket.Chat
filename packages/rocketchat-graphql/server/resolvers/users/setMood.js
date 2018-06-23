import { RocketChat } from 'meteor/rocketchat:lib';

import { authenticated } from '../../helpers/authenticated';
import schema from '../../schemas/users/setMood.graphqls';

const resolver = {
	Mutation: {
		setMood: authenticated((root, { mood }, { user }) => {
			RocketChat.models.Users.update(user._id, {
				$set: {
					mood: mood.toLowerCase()
				}
			});

			return RocketChat.models.Users.findOne(user._id);
		})
	}
};

export {
	schema,
	resolver
};
