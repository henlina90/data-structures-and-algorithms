class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
  getStartHours() {
    return Number(this.startTime.split(":")[0]);
  }
  getStartMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  getEndHours() {
    return Number(this.endTime.split(":")[0]);
  }
  getEndMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
  durationMinutes() {
    const end = this.getEndHours();
    const start = this.getStartHours();
    const startEndHours = (end - start) * 60; // convert hours to mins
    const startEndMinutes = this.getEndMinutes() + this.getStartMinutes();
    const duration = startEndHours + startEndMinutes; // add all minutes

    return duration;
  }

  conflict(Event) {
    if (Event) {
      if (this.endTime < Event.startTime || this.startTime > Event.endTime) {
        return false;
      }
      if (this.endTime > Event.startTime || this.startTime < Event.endTime) {
        return true;
      }
    }
  }

  isBefore(other) {
    return (
      this.getEndHours() < other.getStartHours() ||
      (this.getEndHours() === other.getStartHours() &&
        this.getEndMinutes() <= other.getStartMinutes())
    );
  }
}

// const lunchEvent = new Event("Lunch", "12:00", "13:10", "Chipotle");
// const meeting = new Event("Meeting", "14:10", "15:30", "Conference room");
// const soccerGame = new Event("Soccer game", "15:00", "18:00", "Field");

// console.log(lunchEvent.durationMinutes());
// console.log(meeting.isBefore(lunchEvent)); // > false
module.exports = Event;
