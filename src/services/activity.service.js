import moment from 'moment';
class ActivityService {
  parseActivities(activities) {
    // GET ACTIVITY TYPES
    let types = new Set(activities.map(a => a.type));
    let actList = Object.assign(
      ...Array.from(types, v => ({
        [v]: { name: v, act: [] }
      }))
    );
    // SORT ALL ACTIVITIES
    activities.forEach(act => {
      actList[act.type].act.push({
        id: act.id,
        distance: act.distance,
        elapsed_time: act.elapsed_time,
        date: moment(act.start_date_local).format('DD/MM/YY'),
        avSpeed: act.average_speed,
        kj: act.kilojoules
      });
    });
    console.log(actList);
    return actList;
  }
  // parseActivitiesOriginal(activities) {
  //   let running = [];
  //   let cycling = [];
  //   activities.forEach(act => {
  //     if (act.type == 'Run') {
  //       running.push({
  //         distance: act.distance,
  //         elapsed_time: act.elapsed_time,
  //         date: moment(act.start_date_local).format('DD/MM/YY'),
  //         avSpeed: act.average_speed,
  //         kj: act.kilojoules
  //       });
  //     }
  //     if (act.type == 'Ride') {
  //       cycling.push({
  //         distance: act.distance,
  //         elapsed_time: act.elapsed_time,
  //         date: moment(act.start_date_local).format('DD/MM/YY'),
  //         avSpeed: act.average_speed,
  //         kj: act.kilojoules
  //       });
  //     }
  //   });

  //   return [running, cycling];
  // }
}

export default new ActivityService();
