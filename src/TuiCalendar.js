// https://github.com/nhn/toast-ui.react-calendar
// To Do:
// Create handlers for saving schedule events
// Fetch events from MongoDB
// Why multiple calendars?
// Remove allday row?


import React from 'react';
import './TuiCalendar.css';

import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const myTheme = {
  // Theme object to extends default dark theme.
  'common.border': '1px solid #e5e5e5',
  'common.backgroundColor': 'white',
  'common.holiday.color': '#ff4040',
  'common.saturday.color': '#333',
  'common.dayname.color': '#333',
  'common.today.color': '#333',

  // creation guide style
  'common.creationGuide.backgroundColor': 'rgba(81, 92, 230, 0.05)',
  'common.creationGuide.border': '1px solid #515ce6',

  // month header 'dayname'
  'month.dayname.height': '31px',
  'month.dayname.borderLeft': '1px solid #e5e5e5',
  'month.dayname.paddingLeft': '10px',
  'month.dayname.paddingRight': '10px',
  'month.dayname.backgroundColor': 'inherit',
  'month.dayname.fontSize': '12px',
  'month.dayname.fontWeight': 'normal',
  'month.dayname.textAlign': 'left',

  // month day grid cell 'day'
  'month.holidayExceptThisMonth.color': 'rgba(255, 64, 64, 0.4)',
  'month.dayExceptThisMonth.color': 'rgba(51, 51, 51, 0.4)',
  'month.weekend.backgroundColor': 'inherit',
  'month.day.fontSize': '14px',

  // month schedule style
  'month.schedule.borderRadius': '2px',
  'month.schedule.height': '24px',
  'month.schedule.marginTop': '2px',
  'month.schedule.marginLeft': '8px',
  'month.schedule.marginRight': '8px',

  // month more view
  'month.moreView.border': '1px solid #d5d5d5',
  'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
  'month.moreView.backgroundColor': 'white',
  'month.moreView.paddingBottom': '17px',
  'month.moreViewTitle.height': '44px',
  'month.moreViewTitle.marginBottom': '12px',
  'month.moreViewTitle.backgroundColor': 'inherit',
  'month.moreViewTitle.borderBottom': 'none',
  'month.moreViewTitle.padding': '12px 17px 0 17px',
  'month.moreViewList.padding': '0 17px',

  // week header 'dayname'
  'week.dayname.height': '42px',
  'week.dayname.borderTop': '1px solid #e5e5e5',
  'week.dayname.borderBottom': '1px solid #e5e5e5',
  'week.dayname.borderLeft': 'inherit',
  'week.dayname.paddingLeft': '0',
  'week.dayname.backgroundColor': 'inherit',
  'week.dayname.textAlign': 'left',
  'week.today.color': '#333',
  'week.pastDay.color': '#bbb',

  // week vertical panel 'vpanel'
  'week.vpanelSplitter.border': '1px solid #e5e5e5',
  'week.vpanelSplitter.height': '3px',

  // week daygrid 'daygrid'
  'week.daygrid.borderRight': '1px solid #e5e5e5',
  'week.daygrid.backgroundColor': 'inherit',

  'week.daygridLeft.width': '72px',
  'week.daygridLeft.backgroundColor': 'inherit',
  'week.daygridLeft.paddingRight': '8px',
  'week.daygridLeft.borderRight': '1px solid #e5e5e5',

  'week.today.backgroundColor': 'rgba(81, 92, 230, 0.05)',
  'week.weekend.backgroundColor': 'inherit',

  // week timegrid 'timegrid'
  'week.timegridLeft.width': '72px',
  'week.timegridLeft.backgroundColor': 'inherit',
  'week.timegridLeft.borderRight': '1px solid #e5e5e5',
  'week.timegridLeft.fontSize': '11px',
  'week.timegridLeftTimezoneLabel.height': '40px',
  'week.timegridLeftAdditionalTimezone.backgroundColor': 'white',

  'week.timegridOneHour.height': '20px',
  'week.timegridHalfHour.height': '10px',
  'week.timegridHalfHour.borderBottom': 'none',
  'week.timegridHorizontalLine.borderBottom': '1px solid #e5e5e5',

  'week.timegrid.paddingRight': '8px',
  'week.timegrid.borderRight': '1px solid #e5e5e5',
  'week.timegridSchedule.borderRadius': '2px',
  'week.timegridSchedule.paddingLeft': '2px',

  'week.currentTime.color': '#515ce6',
  'week.currentTime.fontSize': '10px',
  'week.currentTime.fontWeight': 'normal',

  'week.pastTime.color': '#bbb',
  'week.pastTime.fontWeight': 'normal',

  'week.futureTime.color': '#333',
  'week.futureTime.fontWeight': 'normal',

  'week.currentTimeLinePast.border': '1px dashed #515ce6',
  'week.currentTimeLineBullet.backgroundColor': '#515ce6',
  'week.currentTimeLineToday.border': '1px solid #515ce6',
  'week.currentTimeLineFuture.border': 'none',

  // week creation guide style
  'week.creationGuide.color': '#515ce6',
  'week.creationGuide.fontSize': '11px',
  'week.creationGuide.fontWeight': 'bold',

  // week daygrid schedule style
  'week.dayGridSchedule.borderRadius': '2px',
  'week.dayGridSchedule.height': '24px',
  'week.dayGridSchedule.marginTop': '2px',
  'week.dayGridSchedule.marginLeft': '8px',
  'week.dayGridSchedule.marginRight': '8px'
};

const TuiCalendar = () => (
  <Calendar
    height="90vh"
    calendars={[
      {
        id: '0',
        name: 'Private',
        bgColor: '#9e5fff',
        borderColor: '#9e5fff'
      },
      {
        id: '1',
        name: 'Company',
        bgColor: '#00a9ff',
        borderColor: '#00a9ff'
      }
    ]}
    disableDblClick={true}
    disableClick={false}
    isReadOnly={false}
    month={{
      startDayOfWeek: 0
    }}
    schedules={[]}
    scheduleView
    taskView={false}
    template={{
        milestone: function(schedule) {
            return '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + schedule.bgColor + '">' + schedule.title + '</span>';
        },
        milestoneTitle: function() {
            return '<span class="tui-full-calendar-left-content">MILESTONE</span>';
        },
        task: function(schedule) {
            return '#' + schedule.title;
        },
        taskTitle: function() {
            return '<span class="tui-full-calendar-left-content">TASK</span>';
        },
/*        allday: function(schedule) {
            return getTimeTemplate(schedule, true);
        },
*/        alldayTitle: function() {
            return '<span class="tui-full-calendar-left-content">ALL DAY</span>';
        },
/*        time: function(schedule) {
            return '<strong>' + moment(schedule.start.getTime()).format('HH:mm') + '</strong> ' + schedule.title;
        },
*/        goingDuration: function(schedule) {
            return '<span class="calendar-icon ic-travel-time"></span>' + schedule.goingDuration + 'min.';
        },
        comingDuration: function(schedule) {
            return '<span class="calendar-icon ic-travel-time"></span>' + schedule.comingDuration + 'min.';
        },
        monthMoreTitleDate: function(date, dayname) {
            var day = date.split('.')[2];

            return '<span class="tui-full-calendar-month-more-title-day">' + day + '</span> <span class="tui-full-calendar-month-more-title-day-label">' + dayname + '</span>';
        },
        monthMoreClose: function() {
            return '<span class="tui-full-calendar-icon tui-full-calendar-ic-close"></span>';
        },
        monthGridHeader: function(dayModel) {
            var date = parseInt(dayModel.date.split('-')[2], 10);
            var classNames = ['tui-full-calendar-weekday-grid-date '];

            if (dayModel.isToday) {
                classNames.push('tui-full-calendar-weekday-grid-date-decorator');
            }

            return '<span class="' + classNames.join(' ') + '">' + date + '</span>';
        },
        monthGridHeaderExceed: function(hiddenSchedules) {
            return '<span class="weekday-grid-more-schedules">+' + hiddenSchedules + '</span>';
        },
        monthGridFooter: function() {
            return '';
        },
        monthGridFooterExceed: function(hiddenSchedules) {
            return '';
        },
        monthDayname: function(model) {
            return (model.label).toString().toLocaleUpperCase();
        },
        weekDayname: function(model) {
            return '<span class="tui-full-calendar-dayname-date">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>';
        },
        weekGridFooterExceed: function(hiddenSchedules) {
            return '+' + hiddenSchedules;
        },
/*        dayGridTitle: function(viewName) {

            // use another functions instead of 'dayGridTitle'
            // milestoneTitle: function() {...}
            // taskTitle: function() {...}
            // alldayTitle: function() {...}

            var title = '';
            switch(viewName) {
                case 'milestone':
                    title = '<span class="tui-full-calendar-left-content">MILESTONE</span>';
                    break;
                case 'task':
                    title = '<span class="tui-full-calendar-left-content">TASK</span>';
                    break;
                case 'allday':
                    title = '<span class="tui-full-calendar-left-content">ALL DAY</span>';
                    break;
            }

            return title;
        },
*//*        schedule: function(schedule) {

            // use another functions instead of 'schedule'
            // milestone: function() {...}
            // task: function() {...}
            // allday: function() {...}

            var tpl;

            switch(category) {
                case 'milestone':
                    tpl = '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + schedule.bgColor + '">' + schedule.title + '</span>';
                    break;
                case 'task':
                    tpl = '#' + schedule.title;
                    break;
                case 'allday':
                    tpl = getTimeTemplate(schedule, true);
                    break;
            }

            return tpl;
        },
*/        collapseBtnTitle: function() {
            return '<span class="tui-full-calendar-icon tui-full-calendar-ic-arrow-solid-top"></span>';
        },
/*        timezoneDisplayLabel: function(timezoneOffset, displayLabel) {
            var gmt, hour, minutes;

            if (!displayLabel) {
                gmt = timezoneOffset < 0 ? '-' : '+';
                hour = Math.abs(parseInt(timezoneOffset / 60, 10));
                minutes = Math.abs(timezoneOffset % 60);
                displayLabel = gmt + getPadStart(hour) + ':' + getPadStart(minutes);
            }

            return displayLabel;
        },
*/        timegridDisplayPrimayTime: function(time) {
            // will be deprecated. use 'timegridDisplayPrimaryTime'
            var meridiem = 'am';
            var hour = time.hour;

            if (time.hour > 12) {
                meridiem = 'pm';
                hour = time.hour - 12;
            }

            return hour + ' ' + meridiem;
        },
        timegridDisplayPrimaryTime: function(time) {
            var meridiem = 'am';
            var hour = time.hour;

            if (time.hour > 12) {
                meridiem = 'pm';
                hour = time.hour - 12;
            }

            return hour + ' ' + meridiem;
        },
/*        timegridDisplayTime: function(time) {
            return getPadStart(time.hour) + ':' + getPadStart(time.hour);
        },
/*        timegridCurrentTime: function(timezone) {
            var templates = [];

            if (timezone.dateDifference) {
                templates.push('[' + timezone.dateDifferenceSign + timezone.dateDifference + ']<br>');
            }

            templates.push(moment(timezone.hourmarker).format('HH:mm a'));

            return templates.join('');
        },
*/        popupIsAllDay: function() {
            return 'All Day';
        },
        popupStateFree: function() {
            return 'Free';
        },
        popupStateBusy: function() {
            return 'Busy';
        },
        titlePlaceholder: function() {
            return 'Subject';
        },
        locationPlaceholder: function() {
            return 'Location';
        },
        startDatePlaceholder: function() {
            return 'Start date';
        },
        endDatePlaceholder: function() {
            return 'End date';
        },
        popupSave: function() {
            return 'Save';
        },
        popupUpdate: function() {
            return 'Update';
        },
/*        popupDetailDate: function(isAllDay, start, end) {
            var isSameDate = moment(start).isSame(end);
            var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a';

            if (isAllDay) {
                return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'));
            }

            return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat));
        },
*/        popupDetailLocation: function(schedule) {
            return 'Location : ' + schedule.location;
        },
        popupDetailUser: function(schedule) {
            return 'User : ' + (schedule.attendees || []).join(', ');
        },
        popupDetailState: function(schedule) {
            return 'State : ' + schedule.state || 'Busy';
        },
        popupDetailRepeat: function(schedule) {
            return 'Repeat : ' + schedule.recurrenceRule;
        },
        popupDetailBody: function(schedule) {
            return 'Body : ' + schedule.body;
        },
        popupEdit: function() {
            return 'Edit';
        },
        popupDelete: function() {
            return 'Delete';
        }
      }
    }

    theme={myTheme}
    timezones={[
      {
        timezoneOffset: 300,
        displayLabel: 'Eastern Time',
        tooltip: 'New York'
      },
      {
        timezoneOffset: -420,
        displayLabel: 'GMT-08:00',
        tooltip: 'Los Angeles'
      }
    ]}
    useDetailPopup
    useCreationPopup
    // view={selectedView} // You can also set the `defaultView` option.
    week={{
      showTimezoneCollapseButton: false,
      timezonesCollapsed: true
    }}
  />
);


export default TuiCalendar;
