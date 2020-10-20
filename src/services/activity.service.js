import moment from 'moment';
class ActivityService {
  parseActivities(activities) {
    // GET ACTIVITY TYPES
    let types = new Set(activities.map(a => a.type));
    let actList = Object.assign(
      ...Array.from(types, v => ({
        [v]: { name: v, act: [], has_distance: null }
      }))
    );
    // SORT ALL ACTIVITIES INTO TYPES
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
    // SEE IF ACT HAS DISTANCE
    let a = [];
    Object.entries(actList).forEach(type => {
      a.push({
        name: type[1].name,
        has_distance: !type[1].act.every(act => act.distance == 0)
      });
    });
    a.forEach(a => (actList[a.name].has_distance = a.has_distance));
    return actList;
  }

  parseActivityKinds(activities) {
    const a = Object.values(activities);
    let activityType = [];
    let count = 0;
    a.forEach(act => {
      activityType.push({ name: act.name, actNumber: act.act.length });
      count += act.act.length;
    });
    activityType.map(act => (act.actNumber = (act.actNumber * 100) / count));
    return activityType;
  }
}

export default new ActivityService();
