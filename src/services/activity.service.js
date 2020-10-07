import moment from 'moment';
class ActivityService {
  parseActivities(activities) {
    let running = [];
    let cycling = [];
    activities.forEach(act => {
      if (act.type == 'Run') {
        running.push({
          distance: act.distance,
          elapsed_time: act.elapsed_time,
          date: moment(act.start_date_local).format('DD/MM/YY'),
          avSpeed: act.average_speed,
          kj: act.kilojoules
        });
      }
      if (act.type == 'Ride') {
        cycling.push({
          distance: act.distance,
          elapsed_time: act.elapsed_time,
          date: moment(act.start_date_local).format('DD/MM/YY'),
          avSpeed: act.average_speed,
          kj: act.kilojoules
        });
      }
    });

    return [running, cycling];
  }
}

export default new ActivityService();
