import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";
import esLocale from "@fullcalendar/core/locales/pt-br";

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss"],
})
export class AgendaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    locale: esLocale,
    allDaySlot: false,
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',

    businessHours: {
      startTime: "08:00", 
      endTime: "18:00", 
    },
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    themeSystem: "bootstrap5",

    height: 700,
  };
}
