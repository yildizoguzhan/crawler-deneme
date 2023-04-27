import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmailView from "../views/EmailView.vue";
import StorageView from "@/views/StorageView.vue";
import ProjectView from "@/views/ProjectView.vue";
import OfficeView from "@/views/OfficeView.vue";
import ConferanceView from "@/views/ConferanceView.vue";
import ContactView from "@/views/ContactView.vue";
import NoteView from "@/views/NoteView.vue";
import CalendarView from "@/views/CalendarView.vue";
import FormsView from "@/views/FormsView.vue";

import { show } from "../main";
import TitlesView from "../views/TitlesView.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/home/email",
        name: "email",
        component: EmailView,
      },
      {
        path: "/home/storage",
        name: "storage",
        component: StorageView,
      },
      {
        path: "/home/conferance",
        name: "conferance",
        component: ConferanceView,
      },
      {
        path: "/home/calendar",
        name: "calendar",
        component: CalendarView,
      },
      {
        path: "/home/project",
        name: "project",
        component: ProjectView,
      },
      {
        path: "/home/office",
        name: "office",
        component: OfficeView,
      },
      {
        path: "/home/note",
        name: "note",
        component: NoteView,
      },
      {
        path: "/home/contact",
        name: "contact",
        component: ContactView,
      },
      {
        path: "/home/forms",
        name: "forms",
        component: FormsView,
      },
    ],
  },
  {
    path: "/titles",
    name: "titles",
    component: TitlesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
