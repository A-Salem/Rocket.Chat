Meteor.methods({
	setUserMood(mood) {
		check(mood, String);

		this.unblock();

		let currentUserMood = Meteor.user().mood;
		if(currentUserMood != mood){
			return Meteor.users.update({_id: Meteor.userId()}, { $set: {mood: mood} , $inc: { ['moodCount.' + mood]: 1} });
		}
	}
});
