/* globals UserPresenceEvents */
Meteor.startup(() => {
	UserPresenceEvents.on('setMood', (session, mood, metadata) => {
		if (metadata && metadata.visitor) {
			RocketChat.models.LivechatInquiry.updateVisitorMood(metadata.visitor, mood);
			RocketChat.models.Rooms.updateVisitorMood(metadata.visitor, mood);
		}
	});
});
