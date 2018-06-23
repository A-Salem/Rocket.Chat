import './mood_graph.css';
import './mood_graph.html';
import { Tracker } from 'meteor/tracker'

Template.mood_graph.onRendered(function readReceiptsOnRendered() {
  Tracker.autorun(() => {
    let currentUser = Meteor.user();
    let moodCount = currentUser && currentUser.moodCount;
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1", // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true
      title:{
        text: "Mood Graph"
      },
      data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: [
          { label: "happy",  y: moodCount && moodCount.happy },
          { label: "sad", y: moodCount && moodCount.sad },
          { label: "uncertain", y: moodCount && moodCount.uncertain },
          { label: "confused",  y: moodCount && moodCount.confused }
        ]
      }
      ]
    });

    chart.render();
  });

});
